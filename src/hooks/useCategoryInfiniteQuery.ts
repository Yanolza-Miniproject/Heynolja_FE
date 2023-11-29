import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCatgory } from "../api/Category";
import { CategoryFilterParams } from "../utils/filterDecoder";
import { checkCategoryQueryUrl } from "../utils/filterDecoder";

export const useCategoryInfiniteQuery = ({
  region,
  type,
  categoryParking,
  categoryCooking,
  categoryPickup,
}: CategoryFilterParams) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: [
      "category",
      region,
      type,
      categoryParking,
      categoryCooking,
      categoryPickup,
    ],
    queryFn: ({ pageParam }) =>
      fetchCatgory({
        pageParam,
        ...checkCategoryQueryUrl({
          region,
          type,
          categoryParking,
          categoryCooking,
          categoryPickup,
        }),
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (allPages.length === 0) return undefined;
      if (lastPage.data.length === 0) return undefined;
      return lastPageParam + 1;
    },
  });

  return { data, fetchNextPage, hasNextPage, isLoading };
};
