import { useRecoilValue } from "recoil";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkinCheckOutAtom";
import RoomItem from "../RoomItem";
import * as Styled from "./RoomList.styles";
import isInventoryAvailable from "./RoomList.utils";
import { RoomType } from "./RoomList.types";
import defaultImage from "../../../assets/image/no-image.png";

const RoomList = ({ rooms }: { rooms: RoomType[] }) => {
  const checkInDate = useRecoilValue(checkInDateState) || new Date();
  const checkOutDate = useRecoilValue(checkOutDateState) || new Date();

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
            roomImages={
              room.roomImages.length > 0
                ? room.roomImages[0].imageUrl
                : defaultImage
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
