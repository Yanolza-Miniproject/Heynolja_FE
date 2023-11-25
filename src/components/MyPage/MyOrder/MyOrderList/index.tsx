import MyOrderItem from "../MyOrderItem/index";
import * as Styled from "./MyOrderList.styles";
import { bookedList } from "../../../../mock/myPageData";

const MyOrderList = () => {
  return (
    <Styled.MyOrderList>
      {bookedList.map((item) => (
        <MyOrderItem
          key={item.room_basket_id}
          id={item.room_basket_id}
          name={item.accommodation_name}
          type={item.room_name}
          checkIn={item.check_in_at}
          checkOut={item.check_out_at}
          guests={item.number_guests}
          price={item.price}
          paymentAt={item.payment_at}
        />
      ))}
    </Styled.MyOrderList>
  );
};

export default MyOrderList;
