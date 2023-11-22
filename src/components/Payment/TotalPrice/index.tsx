import * as Styled from "./TotalPrice.styles";

const index = () => {
  return (
    <Styled.TotalPriceWrapper>
      <h3>총 결제 금액</h3>
      <Styled.ItemPriceWrapper>
        <span>₩</span>
        <Styled.ItemPrice>39,000</Styled.ItemPrice>
      </Styled.ItemPriceWrapper>
    </Styled.TotalPriceWrapper>
  );
};

export default index;
