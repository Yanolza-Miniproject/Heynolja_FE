import * as Styled from "./Btn.styles";

const index = () => {
  return (
    <Styled.BtnWrapper>
      <Styled.BackToCart>장바구니로 돌아가기</Styled.BackToCart>
      <Styled.GoToPay>
        <Styled.ItemPriceWrapper>
          <span>₩</span>
          <Styled.ItemPrice>39,000</Styled.ItemPrice>
        </Styled.ItemPriceWrapper>
        결제하기
      </Styled.GoToPay>
    </Styled.BtnWrapper>
  );
};

export default index;
