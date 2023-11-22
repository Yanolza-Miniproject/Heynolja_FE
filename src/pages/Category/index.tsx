import * as Styled from "./Category.styles";
import InfiniteScroller from "../../components/Category/InfiniteScroller";
import { useCategoryInfiniteQuery } from "../../hooks/useCategoryInfiniteQuery";
import CategoryItemWrapper from "../../components/Category/CategoryItemWrapper";

export type fetchCatgoryProps = {
  pageParam: number;
  region?: number;
  type?: number;
};

const Category = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useCategoryInfiniteQuery(0, 99);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Styled.CategoryContainer>
      <Styled.ItemWrapper>
        <InfiniteScroller
          length={data?.pages.length}
          fn={fetchNextPage}
          hasNextPage={hasNextPage}
        >
          {data && <CategoryItemWrapper data={data.pages} />}
        </InfiniteScroller>
      </Styled.ItemWrapper>
    </Styled.CategoryContainer>
  );
};

export default Category;
