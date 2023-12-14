import { RoomType } from "./RoomList.types";

export const isInventoryAvailable = (
  room: RoomType,
  checkInDate: Date,
  checkOutDate: Date,
) => {
  if (!checkInDate || !checkOutDate) return true;

  const startDate = new Date(checkInDate);
  const endDate = new Date(checkOutDate);

  if (room.roomInventories) {
    for (const inventoryInfo of room.roomInventories) {
      const inventoryDate = new Date(inventoryInfo.date + "T00:00:00.000Z");

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
