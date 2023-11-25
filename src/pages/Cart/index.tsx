import { useEffect, useState } from "react";
import CartList from "../../components/Cart/CartList";
import CartZero from "../../components/Cart/CartZero";
import { useGetMyCart } from "../../hooks/useCartFetch";
import { CartItemType } from "../../types";

const Cart = () => {
  const { data } = useGetMyCart(); // 카트 목록 데이터 요청
  const [cart, setCart] = useState<CartItemType[]>([]); // 실제 api로 받을 데이터

  useEffect(() => {
    if (data) {
      setCart([...data.data.order_datas]);
    }
  }, [data]);

  if (!cart) {
    return <CartZero />;
  }
  return cart && <CartList cart={cart} setCart={setCart} />;
};

export default Cart;
