import { SetterOrUpdater } from "recoil";
import { CartItemType } from "../../../types";

export const handleBuyClick = (
  estimatedPrice: CartItemType[],
  setPurchaseList: SetterOrUpdater<{
    totalPrice: number;
    data: CartItemType[];
  }>,
  totalPrice: number,
) => {
  setPurchaseList({ totalPrice: totalPrice, data: [...estimatedPrice] });
};
