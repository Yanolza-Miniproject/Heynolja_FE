import * as Styled from "./MyOrderList.styles";
import { useGetMyOrder } from "../../../../hooks/usePayment";
import MyOrderItemWrapper from "../MyOrderItemWrapper";
import { MyOrderListProps } from "./MyOrderList.type";

const MyOrderList = () => {
  const { data } = useGetMyOrder(); // 결제 이력 데이터 요청
  console.log(data?.data.data);

  return (
    <Styled.MyOrderList>
      {data?.data.data.map((item: MyOrderListProps) => (
        <MyOrderItemWrapper
          key={item.payment_id}
          payment_id={item.payment_id}
          total_price={item.total_price}
          total_count={item.total_count}
          payment_at={item.payment_at}
          rooms={item.rooms}
        />
      ))}
    </Styled.MyOrderList>
  );
};

export default MyOrderList;
