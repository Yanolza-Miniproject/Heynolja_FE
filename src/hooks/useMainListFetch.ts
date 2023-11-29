import { useQuery } from "@tanstack/react-query";
import { baseInstance } from "./useAxios";
import { AccommodationData } from "../components/Main/AccommodationList/AccommodationList.types";

interface ListDataResponse {
  data: AccommodationData[];
}

// 내 위치 기반 주변 숙소 리스트 출력
export const useFetchAccomByRegion = (cityCode: number) => {
  return useQuery({
    queryKey: ["accommodations", "byRegion", cityCode],
    queryFn: async () => {
      const data = await baseInstance.get<ListDataResponse>(
        `accommodations?region=${cityCode}`,
      );
      console.log("내 지역코드", cityCode);
      console.log("내 주변 숙소", data.data.data);
      return data.data.data;
    },
  });
};

// 가장 많은 찜을 받은 숙소 리스트 출력
export const useFetchTopLikedAccom = () => {
  return useQuery({
    queryKey: ["accommodations", "topLiked"],
    queryFn: async () => {
      const data = await baseInstance.get<ListDataResponse>("accommodations");
      const listData = data.data.data;
      const filteredData = listData.filter((item) => item.wishCount > 1);
      const topLikedData = filteredData.sort(
        (a, b) => b.wishCount - a.wishCount,
      );
      console.log("가장 많은 좋아요 숙소", topLikedData);
      return topLikedData;
    },
  });
};

// 주차 가능 숙소 리스트 출력
export const useFetchAccomWithParking = () => {
  return useQuery({
    queryKey: ["accommodations", "withParking"],
    queryFn: async () => {
      const data = await baseInstance.get<ListDataResponse>(
        "accommodations?categoryParking=1",
      );
      console.log("주차 가능 숙소", data.data);
      return data.data.data;
    },
  });
};

// 모든 숙소 리스트 출력
export const useFetchAllAccommodations = () => {
  return useQuery({
    queryKey: ["accommodations", "all"],
    queryFn: async () => {
      const data = await baseInstance.get<ListDataResponse>("accommodations");
      console.log("모든 숙소 리스트", data.data);
      return data.data.data;
    },
  });
};

// // 숙소를 누르면 해당 숙소 소개 페이지로 이동
// export const useFetchSelectedAccom = (id: number) => {
//   return useQuery({
//     queryKey: ["accommodations"],
//     queryFn: async () => {
//       const data = await baseInstance.get<ListDataResponse>(
//         `/accommodations/${id}`,
//       );
//       return data.data.data;
//     },
//   });
// };
