// 필요한 임포트들
import { RoomType } from "./RoomList.types";

const isInventoryAvailable = (
  room: RoomType,
  checkInDate: Date,
  checkOutDate: Date,
) => {
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
  return true;
};

export default isInventoryAvailable;
