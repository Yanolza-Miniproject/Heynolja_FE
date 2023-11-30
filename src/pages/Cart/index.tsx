import CartList from "../../components/Cart/CartList";
import { useGetMyCart } from "../../hooks/useCartFetch";

const Cart = () => {
  const { data } = useGetMyCart(); // 카트 목록 데이터 요청

  return data && <CartList data={data.data.data.rooms} />;
};

export default Cart;
