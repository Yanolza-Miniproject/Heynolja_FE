import axios from "axios";
import { useMutation } from "@tanstack/react-query";

// 결제 생성
export const usePayment = (orderId: number) => {
  return useMutation({
    mutationFn: (data: { payment_type: string }) => {
      console.log(data);
      return axios.post(`/api/v1/payments/${orderId}`, { data });
    },
  });
};
