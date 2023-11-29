import { useCategoryInfiniteQuery } from "../../../hooks/useCategoryInfiniteQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import CategoryItemWrapper from "../CategoryItemWrapper/index";
import { CategoryQueryProps } from "./CategoryQuery.types";

const CategoryQuery = ({
  regionNumber = 99,
  accommodationNumber = 99,
  categoryParking = 2,
  categoryCooking = 2,
  categoryPickup = 2,
}: CategoryQueryProps) => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useCategoryInfiniteQuery({
      region: regionNumber,
      type: accommodationNumber,
      categoryParking: categoryParking,
      categoryCooking: categoryCooking,
      categoryPickup: categoryPickup,
    });

  if (isLoading) {
    return <h1>Loading...</h1>;
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
