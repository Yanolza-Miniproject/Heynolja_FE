import { useRecoilValue } from "recoil";
import { categoryQueryAtom } from "../../../store/categoryQueryAtom";
import { useCategoryInfiniteQuery } from "../../../hooks/useCategoryInfiniteQuery";
import InfiniteScroller from "../InfiniteScroller";
import CategoryItemWrapper from "../CategoryItemWrapper";

const CategoryQuery = () => {
  const atomState = useRecoilValue(categoryQueryAtom);
  const regionNumber = atomState.region;
  const accommodationNumber = atomState.type;

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useCategoryInfiniteQuery(regionNumber, accommodationNumber);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <InfiniteScroller
        length={data?.pages.length}
        fn={fetchNextPage}
        hasNextPage={hasNextPage}
      >
        {data && <CategoryItemWrapper data={data.pages} />}
      </InfiniteScroller>
    </>
  );
};

export default CategoryQuery;
