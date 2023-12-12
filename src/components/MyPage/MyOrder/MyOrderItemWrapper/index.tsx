import * as Styled from "./MyOrderItemWrapper.styles";
import MyOrderItem from "../MyOrderItem/index";
import { MyOrderListProps } from "../MyOrderList/MyOrderList.type";
import { MyOrderItemWrapperProps } from "./MyOrderItemWrapper.types";
import { formatDateToYYYYMMDDHHMMSS } from "../../../../utils/formatDate";

const MyOrderItemWrapper = ({
  id,
  totalCount,
  paymentAt,
  rooms,
}: MyOrderListProps) => {
  return (
    <Styled.MyOrderItemWrapper>
      <Styled.Header>
        <Styled.OrderInfo>
          No. {id} | 결제 일시 {formatDateToYYYYMMDDHHMMSS(paymentAt)}
        </Styled.OrderInfo>
        <Styled.OrderTotalPrice>
          총 결제 개수: {totalCount}
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
            numberOfGuests={item.numberOfGuests}
            price={item.price}
            roomUrl={item.roomUrl}
          />
        ))}
      </Styled.ItemWrapper>
    </Styled.MyOrderItemWrapper>
  );
};

export default MyOrderItemWrapper;
