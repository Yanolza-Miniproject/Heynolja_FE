import React, { useState } from "react";
import * as Styled from "./QuantitySelector.styles";
import { QuantitySelectorProps } from "./QuantitySelector.types";

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity,
  onQuantityChange,
  capacity,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    const newQuantity = quantity - 1 > 1 ? quantity - 1 : 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleIncrease = () => {
    if (quantity < capacity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <Styled.SelectorContainer>
      <Styled.InfoContainer>
        <Styled.PriceLabelContainer>
          <Styled.LabelText>숙박 인원 선택</Styled.LabelText>
          <Styled.PriceText>최대 {capacity}명</Styled.PriceText>
        </Styled.PriceLabelContainer>
        <Styled.InfoText>
          * 숙박 인원은 금액에 반영되지 않습니다
        </Styled.InfoText>
      </Styled.InfoContainer>
      <Styled.ControlContainer>
        <Styled.MinusButton onClick={handleDecrease} disabled={quantity === 1}>
          -
        </Styled.MinusButton>
        <Styled.QuantityText>{quantity}</Styled.QuantityText>
        <Styled.PlusButton
          onClick={handleIncrease}
          disabled={quantity >= capacity}
        >
          +
        </Styled.PlusButton>
      </Styled.ControlContainer>
    </Styled.SelectorContainer>
  );
};

export default QuantitySelector;
