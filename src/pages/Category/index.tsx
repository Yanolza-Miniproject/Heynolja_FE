import * as Styled from "./Category.styles";
import InfiniteScroller from "../../components/Category/InfiniteScroller";
import { useCategoryInfiniteQuery } from "../../hooks/useCategoryInfiniteQuery";
import CategoryItemWrapper from "../../components/Category/CategoryItemWrapper";
import CategoryBanner from "../../components/Category/CategoryBanner";
import { useNavigate } from "react-router-dom";
import CategoryFilter from "../../components/Category/CategoryFilter";

const Category = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useCategoryInfiniteQuery(0, 99);
  const router = useNavigate();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleClickSearch = () => {
    router("/search");
  };

  return (
    <Styled.CategoryContainer>
      <CategoryBanner searchFn={handleClickSearch} />
      <Styled.ItemWrapper>
        <CategoryFilter />
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
