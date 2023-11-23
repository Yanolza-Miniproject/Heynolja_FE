import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { RoomDetailType } from "../types";

const { persistAtom } = recoilPersist({
  key: "roomDetailSession",
  storage: sessionStorage,
});

export const roomDetailState = atom<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  roomDetail: any | null;
  price: number;
  number_guests: number;
  data: RoomDetailType[];
}>({
  key: "roomDetailState",
  default: { roomDetail: null, price: 0, number_guests: 1, data: [] },
  effects_UNSTABLE: [persistAtom],
});
