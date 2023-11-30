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
            <div
              key={item.id}
              style={{ marginBottom: "1.5rem" }}
              data-testid="payment_list"
            >
              <Item
                name={item.accommodationName}
                type={item.roomName}
                guests={item.numberOfGuests}
                price={item.price}
                checkIn={item.checkInAt}
                checkOut={item.checkOutAt}
                roomUrl={item.roomUrl}
              />
            </div>
          );
        })}
      </Styled.itemWrapper>
    </Styled.Container>
  );
};

export default PaymentItems;
