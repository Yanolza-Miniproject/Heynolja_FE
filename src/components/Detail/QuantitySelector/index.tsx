import React, { useState } from "react";
import * as Styled from "./QuantitySelector.styles";
import { QuantitySelectorProps } from "./QuantitySelector.types";
import formatNumber from "../../../utils/formatNumber";

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity,
  onQuantityChange,
  price,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    const newQuantity = quantity - 1 > 1 ? quantity - 1 : 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <Styled.SelectorContainer>
      <Styled.InfoContainer>
        <Styled.LabelText>숙박 인원 선택</Styled.LabelText>
        <Styled.PriceText>1인당 가격 ￦{formatNumber(price)}</Styled.PriceText>
      </Styled.InfoContainer>
      <Styled.ControlContainer>
        <Styled.MinusButton onClick={handleDecrease} disabled={quantity === 1}>
          -
        </Styled.MinusButton>
        <Styled.QuantityText>{quantity}</Styled.QuantityText>
        <Styled.PlusButton onClick={handleIncrease}>+</Styled.PlusButton>
      </Styled.ControlContainer>
    </Styled.SelectorContainer>
  );
};

export default QuantitySelector;
