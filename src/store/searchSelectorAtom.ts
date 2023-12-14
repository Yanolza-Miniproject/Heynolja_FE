import { atom } from "recoil";

export const defaultSelector = 99;

export const searchStateAtom = atom({
  key: "searchState",
  default: {
    selectedRegion: defaultSelector,
    selectedType: defaultSelector,
    selectedOptions: [defaultSelector],
    isRegionSelected: false,
    isRegionHovered: false,
    isTypeSelected: false,
    isTypeHovered: false,
    isOptionsSelected: false,
    isOptionsHovered: false,
  },
});
