// import CartList from "../../components/Cart/CartList";
// import { useGetMyCart } from "../../hooks/useCartFetch";
import { authInstance } from "../../hooks/useAxios";
// import useGeolocation from "../../hooks/useGeolocation";

const Cart = () => {
  // const locaition = useGeolocation();
  // const { data } = useGetMyCart(); // 카트 목록 데이터 요청

  const fetch = async () => {
    const accessToken = localStorage.getItem("access_token");
    console.log(accessToken);
    try {
      const response = await authInstance.get("/baskets");

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const refl = async () => {
  //   const a = localStorage.getItem("access_token");
  //   const r = localStorage.getItem("refresh_token");
  //   try {
  //     const response = await baseInstance.post("/refresh", null, {
  //       headers: {
  //         access_token: a,
  //         refresh_token: r,
  //       },
  //     });

  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // console.log(data);

  // if (isLoading) {
  //   return <div>로딩중</div>;
  // }

  // return data && <CartList data={data.data.data.rooms} />;
  return <button onClick={fetch}>asd</button>;
};

export default Cart;
