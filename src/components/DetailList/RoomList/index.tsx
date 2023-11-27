import RoomItem from "../RoomItem";
import * as Styled from "./RoomList.styles";
import { accommodationDetail } from "../../../mock/detailListPageData";

const RoomList = () => {
  const { rooms } = accommodationDetail;

  return (
    <Styled.RoomList>
      {rooms.map((room) => (
        <RoomItem
          key={room.id}
          id={room.id}
          name={room.name}
          price={room.price}
          capacity={room.capacity}
          inventory={room.inventory}
          roomImageUrl={
            Array.isArray(room.room_image_url)
              ? room.room_image_url[0]
              : undefined
          }
        />
      ))}
    </Styled.RoomList>
  );
};

export default RoomList;
