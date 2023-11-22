import * as Styled from "./PriceDisplay.styles";

const PriceDisplay = ({ price }) => (
  <Styled.PriceContainer>
    <Styled.SumText>합계</Styled.SumText>
    <Styled.PriceText>￦ {price}</Styled.PriceText>
  </Styled.PriceContainer>
);

export default PriceDisplay;
