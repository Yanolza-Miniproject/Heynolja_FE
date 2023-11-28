import * as Styled from "./MyOrderList.styles";
import { useGetMyOrder } from "../../../../hooks/usePayment";
import MyOrderItemWrapper from "../MyOrderItemWrapper";
import { MyOrderListProps } from "./MyOrderList.type";

const MyOrderList = () => {
  const { data } = useGetMyOrder(); // 결제 이력 데이터 요청
  console.log(data?.data.data);

  return (
    <Styled.MyOrderList>
      {data?.data.data ? (
        data?.data.data
          .sort((a: MyOrderListProps, b: MyOrderListProps) => {
            const dateA = new Date(a.payment_at).getTime();
            const dateB = new Date(b.payment_at).getTime();

            return dateB - dateA;
          })
          .map((item: MyOrderListProps) => (
            <MyOrderItemWrapper
              key={item.payment_id}
              payment_id={item.payment_id}
              total_price={item.total_price}
              total_count={item.total_count}
              payment_at={item.payment_at}
              rooms={item.rooms}
            />
          ))
      ) : (
        <div>로딩중...</div>
      )}
    </Styled.MyOrderList>
  );
};

export default MyOrderList;
