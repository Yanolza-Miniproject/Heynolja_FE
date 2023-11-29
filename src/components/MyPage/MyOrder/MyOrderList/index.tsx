import * as Styled from "./MyOrderList.styles";
import { useGetMyOrderInfinite } from "../../../../hooks/usePayment";
import MyOrderItemWrapper from "../MyOrderItemWrapper";
import { MyOrderListProps } from "./MyOrderList.type";
import Sidebar from "../../../Common/Sidebar";

const MyOrderList = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetMyOrderInfinite();

  const orderedData = data?.pages.flatMap((page) => page.data.data) || [];

  // console.log(orderedData);

  return (
    <>
      <Sidebar />
      <Styled.MyOrderList>
        {orderedData.length > 0 ? (
          orderedData
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
          <div>아직 결제 완료한 숙소가 없어요!</div>
        )}

        {hasNextPage && (
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage
              ? "로딩 중..."
              : hasNextPage
                ? "더 불러오기"
                : "끝까지 로딩 완료"}
          </button>
        )}
      </Styled.MyOrderList>
    </>
  );
};

export default MyOrderList;
