import { CartItemType } from "../../../types";

export const leftDateUntilTheTrip = (itemList: CartItemType[]) => {
  const currentDate = new Date();

  let day = Number.MAX_SAFE_INTEGER;

  itemList.forEach((item) => {
    const checkInDate: Date = new Date(item.checkInAt);

    const diff: number = Math.ceil(
      (checkInDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (diff >= 0 && diff < day) {
      day = diff;
    }
  });

  return day;
};
