import React, { useState, useEffect } from "react";
import * as Styled from "./QuantitySelector.styles";
import { QuantitySelectorProps } from "./QuantitySelector.types";
import formatNumber from "../../../utils/formatNumber";
import { useRecoilState } from "recoil";
import { roomDetailState } from "../../../store/roomDetailAtom";

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialQuantity = 1,
  initialPrice,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [roomDetail, setRoomDetail] = useRecoilState(roomDetailState);

  const handleDecrease = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 1;
    setQuantity(newQuantity);
    setRoomDetail({ ...roomDetail, number_guests: newQuantity });
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setRoomDetail({ ...roomDetail, number_guests: newQuantity });
  };

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  return (
    <Styled.SelectorContainer>
      <Styled.InfoContainer>
        <Styled.LabelText>숙박 인원 선택</Styled.LabelText>
        {/* 고정된 1인당 가격을 사용합니다 */}
        <Styled.PriceText>
          1인당 가격 ￦{formatNumber(initialPrice)}
        </Styled.PriceText>
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
