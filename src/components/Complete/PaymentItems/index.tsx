import * as Styled from "./PaymentItems.styles";
import { PaymentItemsProps } from "./PaymentItems.types";
import Item from "../../Payment/Item";

const PaymentItems = ({ data }: PaymentItemsProps) => {
  return (
    <Styled.Container>
      <Styled.TextWrapper>결제항목</Styled.TextWrapper>
      <Styled.itemWrapper>
        {data.map((item) => {
          return (
            <div key={item.room_basket_id} style={{ marginBottom: "1.5rem" }}>
              <Item />
            </div>
          );
        })}
      </Styled.itemWrapper>
    </Styled.Container>
  );
};

export default PaymentItems;
