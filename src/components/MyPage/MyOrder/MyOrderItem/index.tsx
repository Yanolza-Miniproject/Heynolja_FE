import * as Styled from "./MyOrder.styles";
import { MyOrderItemProps } from "./MyOrder.types";
import calculateNightCount from "../../../../utils/calculateNightCount";
import formatNumber from "../../../../utils/formatNumber";

const index = ({
  name,
  type,
  checkIn,
  checkOut,
  numberOfGuests,
  price,
  roomUrl,
}: MyOrderItemProps) => {
  return (
    <Styled.ItemWrapper>
      <Styled.ItemTitle>{name}</Styled.ItemTitle>
      <Styled.ItemContent>
        <Styled.ItemImg>
          <img src={roomUrl} />
        </Styled.ItemImg>
        <Styled.ItemInfo>
          <Styled.ItemValueWrapper>
            <Styled.Title>방 타입: </Styled.Title>
            <Styled.Content>{type}</Styled.Content>
          </Styled.ItemValueWrapper>
          <Styled.ItemValueWrapper>
            <Styled.Title>숙박일: </Styled.Title>
            <Styled.Content>
              {checkIn} ~ {checkOut}{" "}
            </Styled.Content>
            <Styled.Content>
              {" "}
              | {calculateNightCount(checkIn, checkOut)}박
            </Styled.Content>
          </Styled.ItemValueWrapper>
          <Styled.ItemValueWrapper>
            <Styled.Title>숙박인원: </Styled.Title>
            <Styled.Content>{numberOfGuests}</Styled.Content>
          </Styled.ItemValueWrapper>
        </Styled.ItemInfo>
      </Styled.ItemContent>
      <Styled.ItemPriceWrapper>
        <span>₩</span>
        <Styled.ItemPrice>
          {formatNumber(
            price * numberOfGuests * calculateNightCount(checkIn, checkOut),
          )}
        </Styled.ItemPrice>
      </Styled.ItemPriceWrapper>
    </Styled.ItemWrapper>
  );
};

export default index;
