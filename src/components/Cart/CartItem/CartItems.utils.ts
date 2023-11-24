import { ChangeEvent } from "react";
import { CartItemType } from "../../../types";

// 카트 아이템 체크박스 클릭 함수
export const handleCheck = (
  event: ChangeEvent<HTMLInputElement>,
  setCheck: React.Dispatch<React.SetStateAction<boolean>>,
  setSelected: React.Dispatch<React.SetStateAction<number>>,
  item: CartItemType,
  setEstimatedPrice: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  estimatedPrice: CartItemType[],
  index: number,
  setSelect: React.Dispatch<React.SetStateAction<boolean[]>>,
  select: boolean[],
) => {
  // 체크 스타일링을 위한 상태 변화
  setCheck(event.target.checked);

  // 체크 됬을 때
  if (event.target.checked) {
    // 개별 카트 아이템 체크 상태 변화
    const copy = [...select];
    copy[index] = true;
    setSelect(copy);

    // 예상 구매 내역 상태 변화
    setEstimatedPrice([...estimatedPrice, item]);

    // 체크 개수 표시
    setSelected((prev) => prev + 1);
  } else {
    // 개별 카트 아이템 체크 상태 변화
    const copy = [...select];
    copy[index] = false;
    setSelect(copy);

    // 예상 구매 내역 상태 변화
    const filtered = estimatedPrice.filter(
      (value) => value.room_basket_id !== item.room_basket_id,
    );
    setEstimatedPrice(filtered);

    // 체크 개수 표시
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

  setCart(filtered);
  setEstimatedPrice(filteredEst);
};
