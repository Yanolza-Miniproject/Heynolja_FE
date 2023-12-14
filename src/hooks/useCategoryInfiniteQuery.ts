import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCatgory } from "../api/Category";
import { CategoryFilterParams } from "../pages/Category/Category.types";

export const useCategoryInfiniteQuery = ({
  region01,
  type,
  categoryParking,
  categoryCooking,
  categoryPickup,
}: CategoryFilterParams) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: [
      "category",
      region01,
      type,
      categoryParking,
      categoryCooking,
      categoryPickup,
    ],
    queryFn: ({ pageParam }) =>
      fetchCatgory(pageParam, {
        region01,
        type,
        categoryParking,
        categoryCooking,
        categoryPickup,
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
