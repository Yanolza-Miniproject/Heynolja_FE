import { useMutation, useQuery } from "@tanstack/react-query";
import { authInstance } from "./useAxios";

// 카트 목록 가져오기
export const useGetMyCart = () => {
  return useQuery({
    queryFn: () => authInstance.get("/baskets"),
    queryKey: ["cart"],
  });
};

// 카트 선택 상품 주문요청
export const usePostOrders = () => {
  return useMutation({
    mutationFn: (data: { room_basket_id: number[] }) => {
      return authInstance.post("/baskets/orders", data);
    },
  });
};

// 카트 아이템 삭제
export const useDeleteCartItem = () => {
  return useMutation({
    mutationFn: (data: { room_basket_id: number[] }) => {
      return authInstance.put("/baskets", { data });
    },
  });
};
