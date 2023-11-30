import CartList from "../../components/Cart/CartList";
import { useGetMyCart } from "../../hooks/useCartFetch";
import { useAuthAlert } from "../../hooks/useAlert";

const Cart = () => {
  const swal = useAuthAlert();
  const { data, isLoading, error } = useGetMyCart(); // 카트 목록 데이터 요청

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (error && error?.message === "Request failed with status code 401") {
    swal();
  }

  return data && <CartList data={data.data.data.rooms} />;
};

export default Cart;
