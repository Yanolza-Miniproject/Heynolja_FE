import * as Styled from "./PriceDisplay.styles";
import formatNumber from "../../../utils/formatNumber";
import calculateNightCount from "../../../utils/calculateNightCount";
import { useRecoilState } from "recoil";
import { roomDetailState } from "../../../store/roomDetailAtom";
import { useEffect } from "react";

const PriceDisplay = () => {
  const [roomDetail, setRoomDetail] = useRecoilState(roomDetailState);

  useEffect(() => {
    if (!roomDetail?.data?.length) {
      return;
    }

    const room = roomDetail.data[0];
    if (
      roomDetail.roomDetail?.check_in_at &&
      roomDetail.roomDetail?.check_out_at
    ) {
      const { check_in_at, check_out_at } = roomDetail.roomDetail;
      const nightCount = calculateNightCount(check_in_at, check_out_at);
      const newTotalPrice = nightCount * room.price;

      if (roomDetail.price !== newTotalPrice) {
        setRoomDetail((oldRoomDetail) => {
          const updatedRoomDetail = { ...oldRoomDetail, price: newTotalPrice };
          console.log("Updated roomDetail:", updatedRoomDetail); // 변경된 상태를 콘솔에 로그로 찍는 부분
          return updatedRoomDetail;
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomDetail.roomDetail?.check_in_at, roomDetail.roomDetail?.check_out_at]);

  if (!roomDetail?.data?.length) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <Styled.PriceContainer>
      <Styled.SumText>합계</Styled.SumText>
      <Styled.PriceText>￦ {formatNumber(roomDetail.price)}</Styled.PriceText>
    </Styled.PriceContainer>
  );
};

export default PriceDisplay;
