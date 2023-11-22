import { CartItemType } from "../types";

const calculateTotalPrice = (items: CartItemType[]) => {
  const prices = items.map((item) => item.price);

  const totalPrice = prices.reduce((acc, price) => acc + price, 0);

  return totalPrice;
};

export default calculateTotalPrice;
