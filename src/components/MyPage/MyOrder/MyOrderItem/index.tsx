import * as Styled from "./MyOrder.styles";

const index = () => {
  return (
    <Styled.ItemWrapper>
      <Styled.ItemTitle>제주도 호텔</Styled.ItemTitle>
      <Styled.ItemContent>
        <Styled.ItemImg></Styled.ItemImg>
        <Styled.ItemInfo>
          <Styled.ItemValueWrapper>
            <Styled.Title>방 타입: </Styled.Title>
            <Styled.Content>디럭스 룸</Styled.Content>
          </Styled.ItemValueWrapper>
          <Styled.ItemValueWrapper>
            <Styled.Title>숙박일: </Styled.Title>
            <Styled.Content>2023.11.11(월) ~ 2023.11.15(금) </Styled.Content>
            <Styled.Content> | 3박</Styled.Content>
          </Styled.ItemValueWrapper>
          <Styled.ItemValueWrapper>
            <Styled.Title>숙박인원: </Styled.Title>
            <Styled.Content>3 </Styled.Content>
          </Styled.ItemValueWrapper>
        </Styled.ItemInfo>
      </Styled.ItemContent>
      <Styled.ItemPriceWrapper>
        <span>₩</span>
        <Styled.ItemPrice>39,000</Styled.ItemPrice>
      </Styled.ItemPriceWrapper>
    </Styled.ItemWrapper>
  );
};

export default index;
