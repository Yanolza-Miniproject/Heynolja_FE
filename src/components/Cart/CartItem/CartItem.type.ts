import { CartItemType } from "../../../types";

// 카트 아이템 프롭스 타입
export interface CartItemProps {
  item: CartItemType;
  cart: CartItemType[];
  select: boolean[];
  setSelect: React.Dispatch<React.SetStateAction<boolean[]>>;
  index: number;
  estimatedPrice: CartItemType[];
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setEstimatedPrice: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}
