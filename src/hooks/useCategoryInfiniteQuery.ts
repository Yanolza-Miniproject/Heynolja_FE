import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCatgory } from "../api/Category";
import { CategoryFilterParams } from "../utils/filterDecoder";
import { checkCategoryQueryUrl } from "../utils/filterDecoder";

export const useCategoryInfiniteQuery = ({
  region,
  type,
  category_parking,
  category_cooking,
  category_pickup,
}: CategoryFilterParams) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: [
      "category",
      region,
      type,
      category_parking,
      category_cooking,
      category_pickup,
    ],
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
      console.log(allPages);
      if (lastPage.data.length === 0) return undefined;
      return lastPageParam + 1;
    },
  });

  return { data, fetchNextPage, hasNextPage, isLoading };
};
