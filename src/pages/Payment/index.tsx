import ItemList from "../../components/Payment/ItemList/index";
import TermsAndConditions from "../../components/Payment/TermsAndConditions/index";
import Btn from "../../components/Payment/Btn/index";
import * as Styled from "./Payment.styles";
import { useRecoilState } from "recoil";
import { purchaseState } from "../../store/purchaseAtom";
import NotFound from "../NotFound";

const Payment = () => {
  const [purchaseList] = useRecoilState(purchaseState);
  const orderId = purchaseList.order_id;

  // axios
  //   .get("/api/v1/accommodations?page=0")
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("조회 실패!", error);
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
