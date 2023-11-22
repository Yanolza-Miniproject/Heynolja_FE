import { SetterOrUpdater } from "recoil";
import { CartItemType } from "../../../types";

export const handleBuyClick = (
  estimatedPrice: CartItemType[],
  setPurchaseList: SetterOrUpdater<CartItemType[]>,
) => {
  setPurchaseList([...estimatedPrice]);
};
