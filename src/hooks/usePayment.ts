import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import { authInstance } from "./useAxios";
import axios from "axios";

// 결제 생성
export const usePayment = (orderId: number) => {
  return useMutation({
    mutationFn: (data: { payment_type: string }) => {
      return axios.post(`/payments/${orderId}`, { data });
    },
  });
};

//결제 목록 불러오기
export const useGetMyOrder = () => {
  return useQuery({
    queryFn: () => axios.get("/payment"),
    queryKey: ["payment"],
  });
};

// 결제 목록 불러오기(무한스크롤)
export const useGetMyOrderInfinite = () => {
  return useInfiniteQuery({
    queryKey: ["payment"],
    queryFn: ({ pageParam = 1 }) =>
      axios.get(`/payment?page=${pageParam}&pageSize=20`),
    getNextPageParam: (lastPage, allPages) => {
      // 만약 더 불러올 페이지가 있다면 페이지 번호를 반환
      return lastPage.data.length === 20 ? allPages.length + 1 : undefined;
    },
    // initialPageParam 속성 추가
    initialPageParam: 1,
  });
};

// 주문 취소
export const useDeleteOrder = (orderId: number) => {
  return useMutation({
    mutationFn: () => {
      return axios.delete(`/orders/${orderId}`);
    },
  });
};
