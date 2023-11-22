import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { RoomDetailType } from "../types";

const { persistAtom } = recoilPersist({
  key: "roomDetailSession",
  storage: sessionStorage,
});

export const roomDetailState = atom<{
  price: number;
  roomDetail: RoomDetailType;
}>({
  key: "roomDetailState",
  default: {
    price: 0,
    roomDetail: {
      accommodation_name: "",
      room_image_url: [],
      room_name: "",
      price: 0,
      number_guests: 0,
      check_in_at: "",
      check_out_at: "",
    },
  },
  //   default: { price: 0, roomDetail: {} },
  effects_UNSTABLE: [persistAtom],
});
