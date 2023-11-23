import * as Styled from "./PriceDisplay.styles";
import formatNumber from "../../../utils/formatNumber";
import calculateNightCount from "../../../utils/calculateNightCount";
import { useRecoilValue } from "recoil";
import { roomDetailState } from "../../../store/roomDetailAtom";

const PriceDisplay = () => {
  const roomDetail = useRecoilValue(roomDetailState);
  console.log("전체 roomDetail 상태:", roomDetail);

  if (!roomDetail?.data?.length) {
    return <div>데이터가 없습니다.</div>;
  }

  const room = roomDetail.data[0];
  console.log("선택된 방 정보:", room);

  if (room.price == null) {
    return <div>가격 정보가 없습니다.</div>;
  }

  let totalPrice;

  if (
    roomDetail.roomDetail &&
    roomDetail.roomDetail.check_in_at &&
    roomDetail.roomDetail.check_out_at
  ) {
    // 체크인 및 체크아웃 날짜가 있는 경우
    const { check_in_at, check_out_at } = roomDetail.roomDetail;
    const nightCount = calculateNightCount(check_in_at, check_out_at);
    totalPrice = nightCount * room.price;
  } else {
    // 체크인 및 체크아웃 날짜가 없는 경우, 기본 가격 사용
    totalPrice = room.price;
  }

  return (
    <Styled.PriceContainer>
      <Styled.SumText>합계</Styled.SumText>
      <Styled.PriceText>￦ {formatNumber(totalPrice)}</Styled.PriceText>
    </Styled.PriceContainer>
  );
};

export default PriceDisplay;
