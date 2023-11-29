import { useMutation, useQuery } from "@tanstack/react-query";
import { authInstance, baseInstance } from "./useAxios";

// 숙소 상세 정보 조회
export const useGetAccommodationDetail = (accommodationId: number) => {
  return useQuery({
    queryKey: ["accommodationDetail", accommodationId],
    // queryFn: () => baseInstance.get("/accommodations/${accommodationId}"),
    queryFn: () => baseInstance.get(`/accommodations/${accommodationId}`),
  });
};
// export const useGetAccommodationDetail = (accommodationId: number) => {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["accommodationDetail", accommodationId],
//     queryFn: () => baseInstance.get(`/accommodations/${accommodationId}`),
//   });

//   return { data, isLoading, error };
// };
// 객실 상세 정보 조회
export const useGetRoomDetail = (roomId: number) => {
  return useQuery({
    queryKey: ["roomDetail", roomId],
    // queryFn: () => baseInstance.get("rooms/${roomId}"),
    queryFn: () => baseInstance.get(`/rooms/${roomId}`),
  });
};

// 상품 장바구니에 담기
export const usePostRoomToCart = () => {
  return useMutation({
    mutationFn: (data: {
      checkInAt: string;
      checkOutAt: string;
      numberOfGuests: number;
      roomId: number;
    }) => {
      // return authInstance.post("/rooms/${data.roomId}/baskets", {
      return authInstance.post(`/rooms/${data.roomId}/baskets`, {
        checkInAt: data.checkInAt,
        checkOutAt: data.checkOutAt,
        numberOfGuests: data.numberOfGuests,
      });
    },
  });
};

// 단일 상품 주문
export const usePostOrder = () => {
  return useMutation({
    mutationFn: (data: {
      checkInAt: string;
      checkOutAt: string;
      numberOfGuests: number;
      roomId: number;
    }) => {
      return authInstance.post(`/rooms/${data.roomId}/orders`, {
        // return authInstance.post("/rooms/${roomId}/orders", {
        checkInAt: data.checkInAt,
        checkOutAt: data.checkOutAt,
        numberOfGuests: data.numberOfGuests,
      });
    },
  });
};
