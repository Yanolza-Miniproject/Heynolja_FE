import React from "react";
import * as Styled from "./ActionButtonGroup.styles";
import { ActionButtonGroupProps } from "./ActionButtonGroup.types";

const ActionButtonGroup: React.FC<ActionButtonGroupProps> = ({
  onAddToCart,
  onBuyNow,
}) => (
  <Styled.ButtonGroupContainer>
    <Styled.AddToCartButton onClick={onAddToCart}>
      장바구니 담기
    </Styled.AddToCartButton>
    <Styled.BuyNowButton onClick={onBuyNow}>바로 구매하기</Styled.BuyNowButton>
  </Styled.ButtonGroupContainer>
);

export default ActionButtonGroup;
