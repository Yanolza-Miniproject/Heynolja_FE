import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

// 객실 상세 정보 조회
export const useGetRoomDetail = (roomId: number) => {
  return useQuery({
    queryKey: ["roomDetail", roomId],
    queryFn: () => axios.get("/api/v1/rooms/${roomId}"),
  });
};

// 상품 장바구니에 담기
export const usePostRoomToCart = () => {
  return useMutation({
    mutationFn: (data: {
      check_in_at: string;
      check_out_at: string;
      number_guests: number;
    }) => {
      console.log(data);
      return axios.post("/api/v1/rooms/${data.room_id}", data);
    },
  });
};

// 단일 상품 주문
export const usePostOrder = () => {
  return useMutation({
    mutationFn: (data: {
      check_in_at: string;
      check_out_at: string;
      number_guests: number;
    }) => {
      console.log(data);
      return axios.post("/api/v1/rooms/${data.room_id}/orders", data);
    },
  });
};
