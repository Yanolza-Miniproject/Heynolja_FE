import Item from "../Item/index";
import * as Styled from "./ItemList.styles";

const index = () => {
  return (
    <Styled.PaymentItemWrapper>
      <h3>결제 항목</h3>
      <Styled.ItemList>
        <Item />
      </Styled.ItemList>
    </Styled.PaymentItemWrapper>
  );
};

export default index;
