import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { CartItemType } from "../types";

const { persistAtom } = recoilPersist({
  key: "sessionStorage", // 고유한 key 값
  storage: sessionStorage,
});

export const purchaseState = atom<CartItemType[]>({
  key: "purchaseState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
