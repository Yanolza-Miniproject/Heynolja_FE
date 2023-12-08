import { useCategoryInfiniteQuery } from "../../../hooks/useCategoryInfiniteQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import CategoryItemWrapper from "../CategoryItemWrapper/index";
import { CategoryQueryProps } from "./CategoryQuery.types";

const IsPropsValid = (props: number | boolean) => {
  if (props === false) return false;
  return props;
};

const CategoryQuery = ({
  regionNumber = false,
  accommodationNumber = false,
  categoryParking = false,
  categoryCooking = false,
  categoryPickup = false,
}: CategoryQueryProps) => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useCategoryInfiniteQuery({
      region01: IsPropsValid(regionNumber),
      type: IsPropsValid(accommodationNumber),
      categoryParking: IsPropsValid(categoryParking),
      categoryCooking: IsPropsValid(categoryCooking),
      categoryPickup: IsPropsValid(categoryPickup),
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <InfiniteScroll
        dataLength={data?.pages.length || 0}
        next={fetchNextPage}
        loader={<></>}
        hasMore={hasNextPage}
        scrollThreshold={0.95}
      >
        {data && <CategoryItemWrapper data={data.pages} />}
      </InfiniteScroll>
    </>
  );
};

export default CategoryQuery;
