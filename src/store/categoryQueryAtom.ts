import { atom } from "recoil";
// import { RegionEnum, TypeEnum } from "../pages/Category/Category.types";

export const categoryQueryAtom = atom({
  key: "categoryQuery",
  default: {
    region_name: "전체보기",
    region: false as boolean | number,
    type_name: "전체보기",
    type: false as boolean | number,
  },
});
