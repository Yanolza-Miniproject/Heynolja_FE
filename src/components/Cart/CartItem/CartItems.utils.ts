import { ChangeEvent } from "react";
import { CartItemType } from "../../../types";

interface HandleCheckProps {
  event: ChangeEvent<HTMLInputElement>;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  item: CartItemType;
  setEstimatedPrice: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  estimatedPrice: CartItemType[];
  index: number;
  setSelect: React.Dispatch<React.SetStateAction<boolean[]>>;
}

interface HandleDeleteProps {
  item: CartItemType;
  cart: CartItemType[];
  estimatedPrice: CartItemType[];
  index: number;
  select: boolean[];
  setSelect: React.Dispatch<React.SetStateAction<boolean[]>>;
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  setEstimatedPrice: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}

// 카트 아이템 체크박스 클릭 함수
export const handleCheck = ({
  event,
  setCheck,
  setSelected,
  item,
  setEstimatedPrice,
  estimatedPrice,
  index,
  setSelect,
}: HandleCheckProps) => {
  // 체크 스타일링을 위한 상태 변화
  setCheck(event.target.checked);

  // 체크 됬을 때
  if (event.target.checked) {
    // 개별 카트 아이템 체크 상태 변화
    setSelect((prev) => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });

    // 예상 구매 내역 상태 변화
    setEstimatedPrice((prev) => [...prev, item]);

    // 체크 개수 표시
    setSelected((prev) => prev + 1);
  } else {
    // 개별 카트 아이템 체크 상태 변화
    setSelect((prev) => {
      const copy = [...prev];
      copy[index] = false;
      return copy;
    });

    // 예상 구매 내역 상태 변화
    const filtered = estimatedPrice.filter((value) => value.id !== item.id);
    setEstimatedPrice(filtered);

    // 체크 개수 표시
    setSelected((prev) => prev - 1);
  }
};

export const handeleDelete = ({
  item,
  cart,
  estimatedPrice,
  index,
  select,
  setSelect,
  setCart,
  setSelected,
  setEstimatedPrice,
}: HandleDeleteProps) => {
  const filtered = cart.filter((value) => value.id !== item.id);

  const filteredEst = estimatedPrice.filter((value) => value.id !== item.id);

  const newSelect = select.slice(0, index).concat(select.slice(index + 1));

  setSelect(newSelect);

  if (estimatedPrice.find((value) => value.id === item.id)) {
    setSelected((prev) => prev - 1);
  }

  setCart(filtered);
  setEstimatedPrice(filteredEst);
};
