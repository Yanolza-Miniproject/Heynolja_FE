import ItemList from "../../components/Payment/ItemList/index";
import TotalPrice from "../../components/Payment/TotalPrice/index";
import TermsAndConditions from "../../components/Payment/TermsAndConditions/index";
import Btn from "../../components/Payment/Btn/index";
import * as Styled from "./Payment.styles";

const Payment = () => {
  return (
    <Styled.Container>
      <ItemList />
      <TotalPrice />
      <TermsAndConditions />
      <Btn />
    </Styled.Container>
  );
};

export default Payment;
