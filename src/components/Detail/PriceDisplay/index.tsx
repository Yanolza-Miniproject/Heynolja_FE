import * as Styled from "./PriceDisplay.styles";
import { PriceDisplayProps } from "./PriceDisplay.types";
import formatNumber from "../../../utils/formatNumber";

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price }) => (
  <Styled.PriceContainer>
    <Styled.SumText>합계</Styled.SumText>
    <Styled.PriceText>￦ {formatNumber(price)}</Styled.PriceText>
  </Styled.PriceContainer>
);

export default PriceDisplay;
