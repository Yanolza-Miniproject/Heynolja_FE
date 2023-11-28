import React from "react";
import * as Styled from "./Card.styles.ts";
import { CardData } from "./Card.types.ts";

const Card: React.FC<CardData> = ({ icon, description, isActive }) => {
  return (
    <Styled.Card isActive={isActive}>
      <Styled.CardContentContainer>
        <Styled.CardIcon>{icon}</Styled.CardIcon>
        {/* <Styled.Icon isActive={isActive} /> */}
        <Styled.CardDescription isActive={isActive}>
          {description}
        </Styled.CardDescription>
      </Styled.CardContentContainer>
    </Styled.Card>
  );
};

export default Card;
