import { CartItemType } from "../../../types";

export interface CartItemProps {
  item: CartItemType;
  cart: CartItemType[];
  estimatedPrice: CartItemType[];
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setEstimatedPrice: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  allSelected: boolean;
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}
