import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CategoryProps } from "../pages/Category/Category.types";

interface ListDataResponse {
  data: CategoryProps[];
}

// 특정 지역 숙소 리스트 출력
export const useFetchAccomByRegion = (region: number) => {
  return useQuery({
    queryKey: ["accommodations", "region", region],
    queryFn: async () => {
      const response = await axios.get<ListDataResponse>(
        "/api/v1/accommodations",
        {
          params: { region },
        },
      );
      return response.data.data;
    },
  });
};

// 가장 많은 찜을 받은 숙소 리스트 출력
export const useFetchTopLikedAccom = () => {
  return useQuery({
    queryKey: ["accommodations"],
    queryFn: async () => {
      const response = await axios.get<ListDataResponse>(
        "/api/v1/accommodations",
      );
      const listData = response.data.data;
      const filteredData = listData.filter((item) => item.like_count > 500);
      const sortedData = filteredData.sort(
        (a, b) => b.like_count - a.like_count,
      );
      return sortedData;
    },
  });
};

// 주차 가능 숙소 리스트 출력
export const useFetchAccomWithParking = (categoryParking: number) => {
  return useQuery({
    queryKey: ["accommodations", "parking", categoryParking],
    queryFn: async () => {
      const response = await axios.get<ListDataResponse>(
        "/api/v1/accommodations",
        {
          params: { categoryParking: 1 },
        },
      );
      return response.data.data;
    },
  });
};

// 모든 숙소 리스트 출력
export const useFetchAllAccommodations = () => {
  return useQuery({
    queryKey: ["accommodations", "all"],
    queryFn: async () => {
      const response = await axios.get<ListDataResponse>(
        "/api/v1/accommodations",
      );
      return response.data.data;
    },
  });
};