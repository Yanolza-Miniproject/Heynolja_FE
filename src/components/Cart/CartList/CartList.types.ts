import { CartItemType } from "../../../types";

export interface CartListProps {
  cart: CartItemType[];
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}
