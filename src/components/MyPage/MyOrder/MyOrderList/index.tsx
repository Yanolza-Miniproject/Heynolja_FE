import * as Styled from "./MyOrderList.styles";
import { useGetMyOrder } from "../../../../hooks/usePayment";
import MyOrderItemWrapper from "../MyOrderItemWrapper";
import { MyOrderListProps } from "./MyOrderList.type";
const MyOrderList = () => {
  const { data } = useGetMyOrder(); // 결제 이력 데이터 요청
  console.log(data);

  return (
    <Styled.MyOrderList>
      {data?.data.data ? (
        data?.data.data
          .sort((a: MyOrderListProps, b: MyOrderListProps) => {
            const dateA = new Date(a.paymentAt).getTime();
            const dateB = new Date(b.paymentAt).getTime();

            return dateB - dateA;
          })
          .map((item: MyOrderListProps) => (
            <MyOrderItemWrapper
              key={item.id}
              id={item.id}
              totalPrice={item.totalPrice}
              totalCount={item.totalCount}
              paymentAt={item.paymentAt}
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
