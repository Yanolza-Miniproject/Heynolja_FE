import { useEffect, useState } from "react";
import CartItem from "../../components/Cart/CartItem";
import CartZero from "../../components/Cart/CartZero";
import Checkbox from "../../components/Cart/Checkbox";
import Estimate from "../../components/Cart/Estimate";
import Button from "../../components/Common/Button";
import { useGetMyCart } from "../../hooks/useCartFetch";
import { CartItemType } from "../../types";
import * as Styled from "./Cart.styles";
import { handleAllCheck, handleSelectDeleteClick } from "./Cart.utils";

const Cart = () => {
  const { data } = useGetMyCart(); // 카트 목록 데이터 요청
  const [cart, setCart] = useState<CartItemType[]>([]); // 실제 api로 받을 데이터
  const [selected, setSelected] = useState<number>(0); // 선택된 아이템 개수
  const [allSelected, setAllSelected] = useState(true); // 전체 선택 여부
  const [estimatedPrice, setEstimatedPrice] = useState<CartItemType[]>([]); // 예상 구매 내역 리스트
  const [select, setSelect] = useState<boolean[]>([]); // 개별 아이템에 대한 체크 여부

  // 카트 데이터 요청 후 페이지 상태 저장
  useEffect(() => {
    if (data) {
      setCart([...data.data.order_datas]);
      setSelect(
        Array.from({ length: data.data.order_datas.length }, () => true),
      );
      setSelected(data.data.order_datas.length);
      setEstimatedPrice([...data.data.order_datas]);
    }
  }, [data]);

  // 개별 아이템 중 1개라도 체크 해제 시 전체 채크 비활성
  useEffect(() => {
    if (select.includes(false)) setAllSelected(false);
  }, [select]);

  // 카트 아이템 없을 시 다른 화면 리턴
  if (cart.length === 0) {
    return <CartZero />;
  }

  return (
    <Styled.Container>
      <Styled.ListWrapper>
        <Styled.WrapTitle>장바구니 목록</Styled.WrapTitle>

        <Styled.AllSelect>
          <Styled.CheckBoxWrapper>
            <Checkbox
              id="all"
              checked={allSelected}
              onChange={(event) => {
                handleAllCheck(
                  event,
                  cart,
                  cart.length,
                  setSelected,
                  setAllSelected,
                  setEstimatedPrice,
                  setSelect,
                );
              }}
            />
          </Styled.CheckBoxWrapper>
          <label htmlFor="all">
            전체 선택({selected}/{cart.length})
          </label>
          <Styled.Empty />
          <Button
            text="선택삭제"
            type="blue"
            size="sm"
            onClick={() => {
              handleSelectDeleteClick(
                cart,
                estimatedPrice,
                setCart,
                setEstimatedPrice,
                setSelected,
              );
            }}
          />
        </Styled.AllSelect>

        {cart.map((item: CartItemType, index: number) => (
          <CartItem
            key={item.room_basket_id}
            item={item}
            cart={cart}
            select={select}
            setSelect={setSelect}
            index={index}
            estimatedPrice={estimatedPrice}
            setSelected={setSelected}
            setEstimatedPrice={setEstimatedPrice}
            setCart={setCart}
          />
        ))}
      </Styled.ListWrapper>

      <Styled.EstimateWrapper>
        <Styled.WrapTitle>예상 구매 내역</Styled.WrapTitle>
        <Estimate estimatedPrice={estimatedPrice} />
      </Styled.EstimateWrapper>
    </Styled.Container>
  );
};

export default Cart;
