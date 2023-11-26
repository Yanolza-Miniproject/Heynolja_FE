import React from "react";
import * as Styled from "./RoomItem.styles"; // 해당 스타일 파일을 적절히 작성해야 합니다.
import formatNumber from "../../../utils/formatNumber"; // 가격 포맷팅 함수
import { RoomItemProps } from "./RoomItem.types";
import personIcon from "../../../assets/svg/person-icon.svg";

const RoomItem: React.FC<RoomItemProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  name,
  price,
  capacity,
  inventory,
  roomImageUrl,
}) => {
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
              남은 객실: {inventory}개
            </Styled.ItemInventory>
            <Styled.ItemPrice>₩{formatNumber(price)}</Styled.ItemPrice>
          </Styled.InventoryPriceContainer>
        </Styled.CapacityPriceContainer>
      </Styled.ItemDetails>
    </Styled.ItemWrapper>
  );
};

export default RoomItem;
