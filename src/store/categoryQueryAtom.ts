import { atom } from "recoil";

export const categoryQueryAtom = atom({
  key: "categoryQuery",
  default: {
    region_name: "전체보기",
    region: 99,
    type_name: "전체보기",
    type: 99,
  },
});
