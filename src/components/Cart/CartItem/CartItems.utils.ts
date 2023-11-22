import { ChangeEvent } from "react";
import { CartItemType } from "../../../types";

export const handleCheck = (
  event: ChangeEvent<HTMLInputElement>,
  setCheck: React.Dispatch<React.SetStateAction<boolean>>,
  setSelected: React.Dispatch<React.SetStateAction<number>>,
  item: CartItemType,
  setEstimatedPrice: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  estimatedPrice: CartItemType[],
) => {
  setCheck(event.target.checked);
  if (event.target.checked) {
    setEstimatedPrice([...estimatedPrice, item]);
    setSelected((prev) => prev + 1);
  } else {
    const filtered = estimatedPrice.filter(
      (value) => value.room_basket_id !== item.room_basket_id,
    );

    setEstimatedPrice(filtered);
    setSelected((prev) => prev - 1);
  }
};

export const handeleDelete = (
  item: CartItemType,
  cart: CartItemType[],
  estimatedPrice: CartItemType[],
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  setSelected: React.Dispatch<React.SetStateAction<number>>,
  setEstimatedPrice: React.Dispatch<React.SetStateAction<CartItemType[]>>,
) => {
  const filtered = cart.filter(
    (value) => value.room_basket_id !== item.room_basket_id,
  );

  const filteredEst = estimatedPrice.filter(
    (value) => value.room_basket_id !== item.room_basket_id,
  );

  if (
    estimatedPrice.find((value) => value.room_basket_id === item.room_basket_id)
  )
    setSelected((prev) => prev - 1);
  else setSelected(0);

  setCart(filtered);
  setEstimatedPrice(filteredEst);
};
