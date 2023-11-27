import { useRecoilValue } from "recoil";
import { accommodationDetail } from "../../../mock/detailListPageData";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkInCheckOutAtom";
import RoomItem from "../RoomItem";
import * as Styled from "./RoomList.styles";
import { RoomType } from "./RoomList.types";

const RoomList = () => {
  const checkInDate = useRecoilValue(checkInDateState) || new Date();
  const checkOutDate = useRecoilValue(checkOutDateState) || new Date();
  const { rooms } = accommodationDetail;

  console.log("체크인 날짜:", checkInDate);
  console.log("체크아웃 날짜:", checkOutDate);

  const isInventoryAvailable = (room: RoomType) => {
    if (!checkInDate || !checkOutDate) return true;

    const startDate = new Date(checkInDate);
    const endDate = new Date(checkOutDate);

    if (room.RoomInventory) {
      for (const inventoryInfo of room.RoomInventory) {
        const formattedDate = "20" + inventoryInfo.date;
        const inventoryDate = new Date(formattedDate + "T00:00:00.000Z");

        if (
          inventoryDate >= startDate &&
          inventoryDate < endDate &&
          inventoryInfo.inventory <= 0
        ) {
          return false;
        }
      }
    }
    console.log(`방 ID: ${room.id}, 재고 상태:`, room.RoomInventory);
    return true;
  };
  const filteredRooms = rooms.filter(isInventoryAvailable);

  console.log("필터링된 방 목록:", filteredRooms);

  return (
    <Styled.RoomList>
      {filteredRooms.map((room) =>
        checkInDate && checkOutDate ? (
          <RoomItem
            key={room.id}
            id={room.id}
            name={room.name}
            price={room.price}
            capacity={room.capacity}
            RoomInventory={room.RoomInventory}
            roomImageUrl={
              room.room_image_url ? room.room_image_url[0] : undefined
            }
            checkInDate={checkInDate}
            checkOutDate={checkOutDate}
          />
        ) : null,
      )}
    </Styled.RoomList>
  );
};

export default RoomList;
