import { atom } from "recoil";

export const checkInDateState = atom<Date | null>({
  key: "checkInDateState",
  default: null,
});

export const checkOutDateState = atom<Date | null>({
  key: "checkOutDateState",
  default: null,
});
