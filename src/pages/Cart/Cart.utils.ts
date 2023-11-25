import { ChangeEvent } from "react";
import { CartItemType } from "../../types";

// 전체 선택 체크박스 클릭
export const handleAllCheck = (
  event: ChangeEvent<HTMLInputElement>,
  cart: CartItemType[],
  length: number,
  setSelected: React.Dispatch<React.SetStateAction<number>>,
  setAllSelected: React.Dispatch<React.SetStateAction<boolean>>,
  setEstimatedPrice: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  setSelect: React.Dispatch<React.SetStateAction<boolean[]>>,
) => {
  // 전체 체크에 대한 상태 저장
  setAllSelected(event.target.checked);
  if (event.target.checked) {
    // 개별 아이템에 대한 체크 여부 모두 true
    setSelect(Array.from({ length: cart.length }, () => true));

    // 예상 구매 내역 상태 저장
    setEstimatedPrice([...cart]);

    // 선택 개수 상태 저장
    setSelected(length);
  } else {
    // 개별 아이템에 대한 체크 여부 모두 false
    setSelect(Array.from({ length: cart.length }, () => false));

    // 예상 구매 내역 상태 저장
    setEstimatedPrice([]);

    // 선택 개수 상태 저장
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
