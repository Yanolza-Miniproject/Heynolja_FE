import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// 주문 목록 가져오기
export const useGetOrderList = (orderId: number) => {
  return useQuery({
    queryFn: () => axios.get(`/api/v1/orders/${orderId}`),
    queryKey: ["orderList"],
  });
};
