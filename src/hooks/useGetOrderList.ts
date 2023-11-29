import { useQuery } from "@tanstack/react-query";
import { authInstance } from "./useAxios";

// 주문 목록 가져오기
export const useGetOrderList = (orderId: number) => {
  return useQuery({
    queryFn: () => authInstance.get(`/orders/${orderId}`),
    queryKey: ["orderList"],
  });
};
