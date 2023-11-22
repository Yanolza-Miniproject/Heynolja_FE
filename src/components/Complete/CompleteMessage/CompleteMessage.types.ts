import { CartItemType } from "../../../types";

export interface CompleteMessageProps {
  item: { totalPrice: number; data: CartItemType[] };
}
