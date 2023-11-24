import * as Styled from "./PriceDisplay.styles";
import { useRecoilValue } from "recoil";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkInCheckOutAtom";
import calculateNightCount from "../../../utils/calculateNightCount";
import formatNumber from "../../../utils/formatNumber";

const PriceDisplay: React.FC<{ pricePerNight: number }> = ({
  pricePerNight,
}) => {
  const checkInDate = useRecoilValue(checkInDateState);
  const checkOutDate = useRecoilValue(checkOutDateState);

  let totalPrice = pricePerNight;

  if (checkInDate && checkOutDate) {
    const nightCount = calculateNightCount(checkInDate, checkOutDate);
    totalPrice = nightCount * pricePerNight;
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
