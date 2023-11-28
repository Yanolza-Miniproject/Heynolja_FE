import { useEffect } from "react";
// import CartList from "../../components/Cart/CartList";
// import { useGetMyCart } from "../../hooks/useCartFetch";
// import axios from "axios";
import { baseInstance } from "../../hooks/useAxios";
// import axios from "axios";
// import useGeolocation from "../../hooks/useGeolocation";

const Cart = () => {
  // const locaition = useGeolocation();
  // const { data, isLoading } = useGetMyCart(); // 카트 목록 데이터 요청

  const fetchData = async () => {
    try {
      const response = await baseInstance.post("/members/login", {
        email: "test@nam.com",
        password: "1234",
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (isLoading) {
  //   return <div>로딩중</div>;
  // }

  // return data && <CartList data={data.data.data.rooms} />;
};

export default Cart;
