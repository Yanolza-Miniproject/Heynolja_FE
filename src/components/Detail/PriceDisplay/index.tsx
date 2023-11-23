import * as Styled from "./PriceDisplay.styles";
import { PriceDisplayProps } from "./PriceDisplay.types";

const PriceDisplay: React.FC<PriceDisplayProps> = ({ price }) => (
  <Styled.PriceContainer>
    <Styled.SumText>합계</Styled.SumText>
    <Styled.PriceText>￦ {price}</Styled.PriceText>
  </Styled.PriceContainer>
);

export default PriceDisplay;
