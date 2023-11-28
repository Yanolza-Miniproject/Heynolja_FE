import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { authInstance } from "./useAxios";
import { useEffect, useState } from "react";

// 숙소 상세 정보 및 좋아요 상태 조회
export const useGetAccommodationDetailWithWish = (accommodationId: number) => {
  const [accommodationDetail, setAccommodationDetail] = useState(null);
  const [isWish, setIsWish] = useState(false);

  useEffect(() => {
    const fetchAccommodationDetail = async () => {
      try {
        const response = await authInstance.get(
          `/accommodations/${accommodationId}`,
        );
        setAccommodationDetail(response.data);
        setIsWish(response.data.isWish);
      } catch (error) {
        console.error(error);
        setIsWish(false);
      }
    };

    fetchAccommodationDetail();
  }, [accommodationId]);

  return { accommodationDetail, isWish };
};

// 객실 상세 정보 조회
export const useGetRoomDetail = (roomId: number) => {
  return useQuery({
    queryKey: ["roomDetail", roomId],
    queryFn: () => axios.get("rooms/${roomId}"),
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
        checkInAt: data.checkInAt,
        checkOutAt: data.checkOutAt,
        numberOfGuests: data.numberOfGuests,
      });
    },
  });
};
