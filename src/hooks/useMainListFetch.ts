import { useQuery } from "@tanstack/react-query";
import { baseInstance } from "./useAxios";
import { AccommodationData } from "../components/Main/AccommodationList/AccommodationList.types";

interface ListDataResponse {
  data: AccommodationData[];
}

// 받아온 숙소 데이터를 무작위로 셔플
function shuffleList(array: AccommodationData[]): AccommodationData[] {
  let arrayCopy = [...array];

  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

// 내 위치 기반 주변 숙소 리스트 출력
export const useFetchAccomByRegion = (cityCode: number) => {
  return useQuery({
    queryKey: ["accommodations", "byRegion", cityCode],
    queryFn: async () => {
      const data = await baseInstance.get<ListDataResponse>(
        `accommodations?region01=${cityCode}`,
      );

      const shuffledData = shuffleList(data.data.data);
      const selectedData = shuffledData.slice(0, 3);

      console.log("내 지역코드", cityCode);
      return selectedData;
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
        "accommodations?category-parking=1",
      );
      const shuffledData = shuffleList(data.data.data);
      const selectedData = shuffledData.slice(0, 3);
      return selectedData;
    },
  });
};

// 모든 숙소 리스트 출력
export const useFetchAllAccommodations = () => {
  return useQuery({
    queryKey: ["accommodations", "all"],
    queryFn: async () => {
      const data = await baseInstance.get<ListDataResponse>("accommodations");
      return data.data.data;
    },
  });
};
