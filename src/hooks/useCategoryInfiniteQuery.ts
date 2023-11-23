import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCatgory } from "../api/Category";

export const useCategoryInfiniteQuery = (
  region: number = 99,
  type: number = 99,
  category_parking: number = 2,
  category_cooking: number = 2,
  category_pickup: number = 2,
) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["category", region, type],
    queryFn: ({ pageParam }) =>
      fetchCatgory({
        pageParam,
        region,
        type,
        category_parking,
        category_cooking,
        category_pickup,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.data.length === 0) return undefined;
      return lastPageParam + 1;
    },
  });

  return { data, fetchNextPage, hasNextPage, isLoading };
};
