import { atom } from "recoil";

export const categoryViewAtom = atom<boolean>({
  key: "categoryViewAtom",

  // 바둑판 뷰가 기본값이므로 true로 설정
  default: true,
});
