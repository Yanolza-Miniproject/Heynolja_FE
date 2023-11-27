import React from "react";
import Card from "../Card";
import * as Styled from "./CardList.styles.ts";
import pickupIcon from "../../../assets/svg/pickup-icon.svg";
import parkingIcon from "../../../assets/svg/automobile-icon.svg";
import cookingIcon from "../../../assets/svg/cooking-icon.svg";
import { CardListProps } from "./CardList.types.ts";

const CardList: React.FC<CardListProps> = ({ parking, cooking, pickup }) => {
  const cardData = [
    {
      icon: <Styled.IconImage src={parkingIcon} isActive={parking} />,
      description: "주차 가능해요",
      isActive: parking,
    },
    {
      icon: <Styled.IconImage src={cookingIcon} isActive={cooking} />,
      description: "취사가 가능해요",
      isActive: cooking,
    },
    {
      icon: <Styled.IconImage src={pickupIcon} isActive={pickup} />,
      description: "픽업 서비스가 있어요",
      isActive: pickup,
    },
  ];

  return (
    <>
      <Styled.CardTitleText>우리 숙소는요,</Styled.CardTitleText>{" "}
      <Styled.CardListContainer>
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            description={card.description}
            isActive={card.isActive}
          />
        ))}
      </Styled.CardListContainer>
    </>
  );
};

export default CardList;
