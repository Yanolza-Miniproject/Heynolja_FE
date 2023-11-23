import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCatgory } from "../api/Category";

type Params = {
  region: number;
  type: number;
  category_parking: number;
  category_cooking: number;
  category_pickup: number;
};

const checkCategoryQueryUrl = ({
  region,
  type,
  category_parking,
  category_cooking,
  category_pickup,
}: Params) => {
  const queryObjects = {
    regionUrl: region !== 99 && region !== undefined ? `&region=${region}` : "",
    typeUrl: type !== 99 && type !== undefined ? `&type=${type}` : "",
    category_parkingUrl:
      category_parking !== 2 && category_parking !== undefined
        ? `&category_parking=${category_parking}`
        : "",
    category_cookingUrl:
      category_cooking !== 2 && category_cooking !== undefined
        ? `&category_cooking=${category_cooking}`
        : "",
    category_pickupUrl:
      category_pickup !== 2 && category_pickup !== undefined
        ? `&category_pickup=${category_pickup}`
        : "",
  };

  return queryObjects;
};

export const useCategoryInfiniteQuery = ({
  region,
  type,
  category_parking,
  category_cooking,
  category_pickup,
}: Params) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["category", region, type],
    queryFn: ({ pageParam }) =>
      fetchCatgory({
        pageParam,
        ...checkCategoryQueryUrl({
          region,
          type,
          category_parking,
          category_cooking,
          category_pickup,
        }),
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.data.length === 0) return undefined;
      return lastPageParam + 1;
    },
  });

  return { data, fetchNextPage, hasNextPage, isLoading };
};
