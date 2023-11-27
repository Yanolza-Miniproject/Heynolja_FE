import CartList from "../../components/Cart/CartList";
import { useGetMyCart } from "../../hooks/useCartFetch";

const Cart = () => {
  const { data, isLoading } = useGetMyCart(); // 카트 목록 데이터 요청

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return data && <CartList data={data.data.data.rooms} />;
};

export default Cart;
