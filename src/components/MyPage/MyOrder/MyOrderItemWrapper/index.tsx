import * as Styled from "./MyOrderItemWrapper.styles";
import MyOrderItem from "../MyOrderItem/index";
import { MyOrderListProps } from "../MyOrderList/MyOrderList.type";
import { MyOrderItemWrapperProps } from "./MyOrderItemWrapper.types";
import formatNumber from "../../../../utils/formatNumber";

const MyOrderItemWrapper = ({
  payment_id,
  total_price,
  total_count,
  payment_at,
  rooms,
}: MyOrderListProps) => {
  return (
    <Styled.MyOrderItemWrapper>
      <Styled.Header>
        <Styled.OrderInfo>
          결제번호: {payment_id}, 결제일시: {payment_at}
        </Styled.OrderInfo>
        <Styled.OrderTotalPrice>
          결제개수: {total_count}, 결제가격: ₩ {formatNumber(total_price)}
        </Styled.OrderTotalPrice>
      </Styled.Header>
      {rooms.map((item: MyOrderItemWrapperProps) => (
        <MyOrderItem
          key={item.room_basket_id}
          id={item.room_basket_id}
          name={item.accommodation_name}
          type={item.room_name}
          checkIn={item.check_in_at}
          checkOut={item.check_out_at}
          guests={item.number_guests}
          price={item.price}
          room_image_url={item.room_image_url}
        />
      ))}
    </Styled.MyOrderItemWrapper>
  );
};

export default MyOrderItemWrapper;
