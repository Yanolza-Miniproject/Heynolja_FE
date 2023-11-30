import * as Styled from "./MyOrderItemWrapper.styles";
import MyOrderItem from "../MyOrderItem/index";
import { MyOrderListProps } from "../MyOrderList/MyOrderList.type";
import { MyOrderItemWrapperProps } from "./MyOrderItemWrapper.types";
import formatNumber from "../../../../utils/formatNumber";

const MyOrderItemWrapper = ({
  id,
  totalPrice,
  totalCount,
  paymentAt,
  rooms,
}: MyOrderListProps) => {
  return (
    <Styled.MyOrderItemWrapper>
      <Styled.Header>
        <Styled.OrderInfo>
          결제번호: {id}, 결제일시: {paymentAt}
        </Styled.OrderInfo>
        <Styled.OrderTotalPrice>
          결제개수: {totalCount}, 결제가격: ₩ {formatNumber(totalPrice)}
        </Styled.OrderTotalPrice>
      </Styled.Header>
      <Styled.ItemWrapper>
        {rooms.map((item: MyOrderItemWrapperProps) => (
          <MyOrderItem
            key={item.id}
            id={item.id}
            name={item.accommodationName}
            type={item.roomName}
            checkIn={item.checkInAt}
            checkOut={item.checkOutAt}
            guests={item.numberGuests}
            price={item.price}
            roomUrl={item.roomUrl}
          />
        ))}
      </Styled.ItemWrapper>
    </Styled.MyOrderItemWrapper>
  );
};

export default MyOrderItemWrapper;
