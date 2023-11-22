import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CartItemType } from "../types";

const { persistAtom } = recoilPersist({
  key: "sessionStorage", // 고유한 key 값
  storage: sessionStorage,
});

export const purchaseState = atom<{ totalPrice: number; data: CartItemType[] }>(
  {
    key: "purchaseState",
    default: { totalPrice: 0, data: [] },
    effects_UNSTABLE: [persistAtom],
  },
);
