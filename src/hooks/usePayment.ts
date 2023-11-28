import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

// 결제 생성
export const usePayment = (orderId: number) => {
  return useMutation({
    mutationFn: (data: { payment_type: string }) => {
      console.log(data);
      return axios.post(`/api/v1/payments/${orderId}`, { data });
    },
  });
};

// 결제 목록 불러오기
export const useGetMyOrder = () => {
  return useQuery({
    queryFn: () => axios.get("/api/v1/payment"),
    queryKey: ["payment"],
  });
};

// 주문 취소
export const useDeleteOrder = (orderId: number) => {
  return useMutation({
    mutationFn: () => {
      return axios.delete(`/api/v1/orders/${orderId}`);
    },
  });
};
