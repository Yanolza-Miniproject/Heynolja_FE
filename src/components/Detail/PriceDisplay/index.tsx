import * as Styled from "./PriceDisplay.styles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkInCheckOutAtom";
import calculateNightCount from "../../../utils/calculateNightCount";
import formatNumber from "../../../utils/formatNumber";
import { purchaseState } from "../../../store/purchaseAtom";
// import formatDate from "../../../utils/formatDate";

const PriceDisplay: React.FC<{ pricePerNight: number }> = ({
  pricePerNight,
}) => {
  const checkInDate = useRecoilValue(checkInDateState);
  const checkOutDate = useRecoilValue(checkOutDateState);
  const setPurchase = useSetRecoilState(purchaseState);

  let totalPrice = pricePerNight;

  if (checkInDate instanceof Date && checkOutDate instanceof Date) {
    const formattedCheckInDate = checkInDate.toISOString();
    const formattedCheckOutDate = checkOutDate.toISOString();
    const nightCount = calculateNightCount(
      formattedCheckInDate,
      formattedCheckOutDate,
    );
    totalPrice = nightCount * pricePerNight;

    setPurchase((prev) => ({
      ...prev,
      totalPrice: totalPrice,
    }));
  }

  console.log("체크인 날짜:", checkInDate);
  console.log("체크아웃 날짜:", checkOutDate);
  // console.log("숙박 일수:", nightCount);
  console.log("총 가격:", totalPrice);
  console.log("1박당 가격:", pricePerNight);

  return (
    <Styled.PriceContainer>
      <Styled.SumText>합계</Styled.SumText>
      <Styled.PriceText>￦ {formatNumber(totalPrice)}</Styled.PriceText>
    </Styled.PriceContainer>
  );
};

export default PriceDisplay;
