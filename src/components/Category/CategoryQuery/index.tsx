import { useCategoryInfiniteQuery } from "../../../hooks/useCategoryInfiniteQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import CategoryItemWrapper from "../CategoryItemWrapper";

export type CategoryQueryProps = {
  regionNumber: number;
  accommodationNumber: number;
  category_parking?: number;
  category_cooking?: number;
  category_pickup?: number;
};

const CategoryQuery = ({
  regionNumber = 99,
  accommodationNumber = 99,
  category_parking = 2,
  category_cooking = 2,
  category_pickup = 2,
}: CategoryQueryProps) => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useCategoryInfiniteQuery({
      region: regionNumber,
      type: accommodationNumber,
      category_parking: category_parking,
      category_cooking: category_cooking,
      category_pickup: category_pickup,
    });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(data);

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
