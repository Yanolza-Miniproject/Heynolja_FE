import { useState } from "react";
import CartItem from "../../components/Cart/CartItem";
import Checkbox from "../../components/Cart/Checkbox";
import Estimate from "../../components/Cart/Estimate";
import { cartList } from "../../mock/myPageData";
import { CartItemType } from "../../types";
import * as Styled from "./Cart.styles";
import { handleAllCheck, handleSelectDeleteClick } from "./Cart.utils";

const Cart = () => {
  const [cart, setCart] = useState<CartItemType[]>(cartList);
  const [selected, setSelected] = useState<number>(0);
  const [allSelected, setAllSelected] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<CartItemType[]>([]);

  return (
    <Styled.Container>
      <Styled.ListWrapper>
        <p>장바구니 목록</p>

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
          <button
            onClick={() => {
              handleSelectDeleteClick(
                cart,
                estimatedPrice,
                setCart,
                setEstimatedPrice,
                setSelected,
              );
            }}
          >
            선택삭제
          </button>
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
        <p>예상 구매 내역</p>
        <Estimate estimatedPrice={estimatedPrice} />
      </Styled.EstimateWrapper>
    </Styled.Container>
  );
};

export default Cart;
