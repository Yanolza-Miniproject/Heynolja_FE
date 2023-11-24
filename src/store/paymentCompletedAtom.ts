import { atom } from "recoil";
import { CartItemType } from "../types";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "sessionStorage",
  storage: sessionStorage,
});

interface AtomType {
  order_datas: CartItemType[];
  payment_at: string;
  payment_id: number | null;
  payment_status: string;
  payment_type: string;
  total_price: number;
}

export const paymentCompletedAtom = atom<AtomType>({
  key: "paymentCompletedAtom",
  default: {
    order_datas: [],
    payment_at: "",
    payment_id: null,
    payment_status: "",
    payment_type: "",
    total_price: 0,
  },
  effects_UNSTABLE: [persistAtom],
});
