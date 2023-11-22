import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { RoomDetailType } from "../types";

const { persistAtom } = recoilPersist({
  key: "roomDetailSession",
  storage: sessionStorage,
});

export const roomDetailState = atom<{ price: number; data: RoomDetailType[] }>({
  key: "roomDetailState",

  default: { price: 0, data: [] },
  effects_UNSTABLE: [persistAtom],
});
