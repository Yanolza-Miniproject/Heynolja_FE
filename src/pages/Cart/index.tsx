import CartList from "../../components/Cart/CartList";
import { authInstance, baseInstance } from "../../hooks/useAxios";
import { useGetMyCart } from "../../hooks/useCartFetch";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetMyCart(); // 카트 목록 데이터 요청

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (error && error?.message === "Request failed with status code 401") {
    navigate("/signin");
  }

  return data && <CartList data={data.data.data.rooms} />;
};

export default Cart;
