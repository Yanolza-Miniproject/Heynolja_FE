import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "userDataSessionStorage",
  storage: sessionStorage,
});

export const userDataAtom = atom<{
  nickName: string;
  memberId: string;
}>({
  key: "userDataAtom",
  default: {
    nickName: "",
    memberId: "",
  },
  effects_UNSTABLE: [persistAtom],
});
