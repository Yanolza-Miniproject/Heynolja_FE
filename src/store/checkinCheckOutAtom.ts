import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "sessionStorage",
  storage: sessionStorage,
});

export const checkInDateState = atom<Date | null>({
  key: "checkInDateState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const checkOutDateState = atom<Date | null>({
  key: "checkOutDateState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
