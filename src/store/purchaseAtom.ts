import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "sessionStorage", // 고유한 key 값
  storage: sessionStorage,
});

export const purchaseState = atom<{
  totalPrice: number;
  order_id: number | null;
}>({
  key: "purchaseState",
  default: { totalPrice: 0, order_id: null },
  effects_UNSTABLE: [persistAtom],
});
