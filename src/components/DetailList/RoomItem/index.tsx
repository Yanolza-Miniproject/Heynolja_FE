import React from "react";
import * as Styled from "./RoomItem.styles";
import formatNumber from "../../../utils/formatNumber";
import { RoomItemProps } from "./RoomItem.types";
import personIcon from "../../../assets/svg/person-icon.svg";
import { formatDateToYYMMDD } from "../../../utils/formatDate";

const RoomItem: React.FC<
  RoomItemProps & { checkInDate: Date; checkOutDate: Date }
> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  name,
  price,
  capacity,
  roomImageUrl,
  RoomInventory,
  checkInDate,
}) => {
  let remainingInventory = "데이터 없음";

  if (checkInDate && RoomInventory) {
    const checkInDateString = formatDateToYYMMDD(checkInDate);

    const inventoryData = RoomInventory.find(
      (inv) => inv.date === checkInDateString,
    );

    remainingInventory = inventoryData
      ? `${inventoryData.inventory}개`
      : "데이터 없음";
  }

  return (
    <Styled.ItemWrapper>
      <Styled.ImageContainer>
        <Styled.ItemImage src={roomImageUrl} alt={`${name} 이미지`} />
      </Styled.ImageContainer>
      <Styled.ItemDetails>
        <Styled.ItemName>{name}</Styled.ItemName>
        <Styled.CapacityPriceContainer>
          <Styled.CapacityContainer>
            <Styled.IconImage src={personIcon} alt="person 아이콘" />
            <Styled.ItemCapacity>최대 인원: {capacity}명</Styled.ItemCapacity>
          </Styled.CapacityContainer>
          <Styled.InventoryPriceContainer>
            <Styled.ItemInventory>
              남은 객실: {remainingInventory}
            </Styled.ItemInventory>
            <Styled.ItemPrice>₩{formatNumber(price)}</Styled.ItemPrice>
          </Styled.InventoryPriceContainer>
        </Styled.CapacityPriceContainer>
      </Styled.ItemDetails>
    </Styled.ItemWrapper>
  );
};

export default RoomItem;
