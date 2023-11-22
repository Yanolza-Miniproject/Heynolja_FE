import { useState } from "react";
import CartItem from "../../components/Cart/CartItem";
import CartZero from "../../components/Cart/CartZero";
import Checkbox from "../../components/Cart/Checkbox";
import Estimate from "../../components/Cart/Estimate";
import Button from "../../components/Common/Button";
import { cartList } from "../../mock/myPageData";
import { CartItemType } from "../../types";
import * as Styled from "./Cart.styles";
import { handleAllCheck, handleSelectDeleteClick } from "./Cart.utils";

const Cart = () => {
  const [cart, setCart] = useState<CartItemType[]>(cartList);
  const [selected, setSelected] = useState<number>(0);
  const [allSelected, setAllSelected] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<CartItemType[]>([]);

  if (cart.length === 0) {
    return <CartZero />;
  }

  return (
    <Styled.Container>
      <Styled.ListWrapper>
        <Styled.WrapTitle>장바구니 목록</Styled.WrapTitle>

        <Styled.AllSelect>
          <Checkbox
            id="all"
            onChange={(event) => {
              handleAllCheck(
                event,
                cart,
                cart.length,
                setSelected,
                setAllSelected,
                setEstimatedPrice,
              );
            }}
          />
          <label htmlFor="all">
            전채 선택({selected}/{cart.length})
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

        {cart.map((item: CartItemType) => (
          <CartItem
            key={item.room_basket_id}
            item={item}
            cart={cart}
            allSelected={allSelected}
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
