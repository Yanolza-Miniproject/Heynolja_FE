import { useNavigate } from "react-router";
import CartList from "../../components/Cart/CartList";
import { useGetMyCart } from "../../hooks/useCartFetch";
import { authInstance } from "../../hooks/useAxios";

// interface requestBodyProps {
//   checkInAt: string;
//   checkOutAt: string;
//   numberOfGuests: number;
// }

const Cart = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetMyCart(); // 카트 목록 데이터 요청

  // const requestBody: requestBodyProps = {
  //   checkInAt: "2023-12-25",
  //   checkOutAt: "2023-12-25",
  //   numberOfGuests: 3,
  // };

  // authInstance
  //   .post("/rooms/2/baskets", requestBody)
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("장바구니 등록 실패!", error);
  //   });

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (error && error?.message === "Request failed with status code 401") {
    navigate("/signin");
  }

  return data && <CartList data={data.data.data.rooms} />;
};

export default Cart;
