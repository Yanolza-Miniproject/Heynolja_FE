import { ChangeEvent } from "react";
import { CartItemType } from "../../types";

export const handleAllCheck = (
  event: ChangeEvent<HTMLInputElement>,
  cart: CartItemType[],
  length: number,
  setSelected: React.Dispatch<React.SetStateAction<number>>,
  setAllSelected: React.Dispatch<React.SetStateAction<boolean>>,
  setEstimatedPrice: React.Dispatch<React.SetStateAction<CartItemType[]>>,
) => {
  setAllSelected(event.target.checked);
  if (event.target.checked) {
    setEstimatedPrice([...cart]);
    setSelected(length);
  } else {
    setEstimatedPrice([]);
    setSelected(0);
  }
};

export const handleSelectDeleteClick = (
  cart: CartItemType[],
  estimatedPrice: CartItemType[],
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  setEstimatedPrice: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  setSelected: React.Dispatch<React.SetStateAction<number>>,
) => {
  const set = new Set(estimatedPrice.map((item) => JSON.stringify(item)));
  const filtered = cart.filter((item) => !set.has(JSON.stringify(item)));

  setSelected(0);
  setCart(filtered);
  setEstimatedPrice([]);
};
