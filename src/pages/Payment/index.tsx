import ItemList from "../../components/Payment/ItemList/index";
import TermsAndConditions from "../../components/Payment/TermsAndConditions/index";
import Btn from "../../components/Payment/Btn/index";
import * as Styled from "./Payment.styles";
import { useRecoilState } from "recoil";
import { purchaseState } from "../../store/purchaseAtom";
import NotFound from "../NotFound";

// interface requestBodyProps {
//   checkInAt: string;
//   checkOutAt: string;
//   numberOfGuests: number;
// }

const Payment = () => {
  const [purchaseList] = useRecoilState(purchaseState);
  const orderId = purchaseList.order_id;

  //숙소정보 받아오기(서버통신 확인용)
  // axios
  //   .get("/api/v1/accommodations?page=0")
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("조회 실패!", error);
  //   });

  //주문내역 상세조회
  // axios
  //   .get("http://43.200.54.142:8080/api/v1/orders/1")
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // 결제 생성
  // authInstance
  //   .post("/orders/2/payments")
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //단일주문
  // const requestBody: requestBodyProps = {
  //   checkInAt: "2023-12-25",
  //   checkOutAt: "2023-12-25",
  //   numberOfGuests: 3,
  // };

  // authInstance
  //   .post("/rooms/1/orders", requestBody)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <Styled.Container>
      {orderId === null ? (
        <NotFound />
      ) : (
        <>
          <ItemList />
          <TermsAndConditions />
          <Btn />
        </>
      )}
    </Styled.Container>
  );
};

export default Payment;
