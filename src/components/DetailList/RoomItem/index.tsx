import React from "react";
import * as Styled from "./RoomItem.styles";
import formatNumber from "../../../utils/formatNumber";
import { RoomItemProps } from "./RoomItem.types";
import personIcon from "../../../assets/svg/person-icon.svg";
import { formatDateToYYMMDD } from "../../../utils/formatDate";
import { useLocation, useNavigate } from "react-router-dom";

const RoomItem: React.FC<
  RoomItemProps & { checkInDate: Date; checkOutDate: Date }
> = ({
  id,
  name,
  price,
  capacity,
  roomImageUrl,
  RoomInventory,
  checkInDate,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const accommodationId = queryParams.get("accommodation-id");

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

  const handleRoomClick = () => {
    navigate(`/detail?accommodation-id=${accommodationId}&room-id=${id}`);
  };

  return (
    <Styled.ItemWrapper onClick={handleRoomClick}>
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
