import { atom } from "recoil";

export const searchStateAtom = atom({
  key: "searchState",
  default: {
    selectedRegion: 99,
    selectedType: 99,
    selectedOptions: [99],
    isRegionSelected: false,
    isRegionHovered: false,
    isTypeSelected: false,
    isTypeHovered: false,
    isOptionsSelected: false,
    isOptionsHovered: false,
  },
});
