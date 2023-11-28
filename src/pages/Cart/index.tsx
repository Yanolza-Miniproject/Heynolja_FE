import CartList from "../../components/Cart/CartList";
import { useGetMyCart } from "../../hooks/useCartFetch";
import useGeolocation from "../../hooks/useGeolocation";

const Cart = () => {
  const locaition = useGeolocation();
  const { data, isLoading } = useGetMyCart(); // 카트 목록 데이터 요청

  console.log(locaition);

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return data && <CartList data={data.data.data.rooms} />;
};

export default Cart;
