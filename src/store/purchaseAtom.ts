import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

interface Type {
  room_basket_id: number;
  accommdation_name: string;
  room_name: string;
  check_in_at: string;
  check_out_at: string;
  number_guests: number;
  price: number;
}

const { persistAtom } = recoilPersist({
  key: "sessionStorage",
  storage: sessionStorage,
});

export const purchaseState = atom<{
  totalPrice: number;
  order_id: number | null;
  data: Type[];
}>({
  key: "purchaseState",
  default: {
    totalPrice: 0,
    order_id: null,
    data: [
      {
        room_basket_id: 4,
        accommdation_name: "제주 라마다 호텔",
        room_name: "스위트룸",
        check_in_at: "11-11-11",
        check_out_at: "11-11-11",
        number_guests: 3,
        price: 1233,
      },
    ],
  },
  effects_UNSTABLE: [persistAtom],
});

export const termsState = atom({
  key: "termsState",
  default: false,
});
