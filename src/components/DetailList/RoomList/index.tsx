import { useRecoilValue } from "recoil";
import { accommodationDetail } from "../../../mock/detailListPageData";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkinCheckOutAtom";
import RoomItem from "../RoomItem";
import * as Styled from "./RoomList.styles";
import isInventoryAvailable from "./RoomList.utils";

const RoomList = () => {
  const checkInDate = useRecoilValue(checkInDateState) || new Date();
  const checkOutDate = useRecoilValue(checkOutDateState) || new Date();
  const { rooms } = accommodationDetail;

  const filteredRooms = rooms.filter((room) =>
    isInventoryAvailable(room, checkInDate, checkOutDate),
  );

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
