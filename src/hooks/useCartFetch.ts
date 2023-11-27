import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

// 카트 목록 가져오기
export const useGetMyCart = () => {
  return useQuery({
    queryFn: () => axios.get("/api/v1/baskets"),
    queryKey: ["cart"],
  });
};

// 카트 선택 상품 주문요청
export const usePostOrders = () => {
  return useMutation({
    mutationFn: (data: { room_basket_id: number[] }) => {
      return axios.post("/api/v1/baskets/orders", data);
    },
  });
};

// 카트 아이템 삭제
export const useDeleteCartItem = () => {
  return useMutation({
    mutationFn: (data: { room_basket_id: number }) => {
      return axios.delete("/api/v1/baskets", { data });
    },
  });
};
