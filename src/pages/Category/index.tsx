import * as Styled from "./Category.styles";
import { CategoryProps } from "./Category.types";
import CategoryItem from "../../components/Category/CatgoryItem";
import InfiniteScroller from "../../components/Category/InfiniteScroller";
import { useCategoryInfiniteQuery } from "../../hooks/useCategoryInfiniteQuery";

export type fetchCatgoryProps = {
  pageParam: number;
  region?: number;
  type?: number;
};

const Category = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } =
    useCategoryInfiniteQuery();

  if (isLoading) {
    console.log("loading");
    return <h1>Loading...</h1>;
  }

  return (
    <Styled.CategoryContainer>
      <Styled.ItemWrapper>
        <InfiniteScroller
          length={data?.pages.length}
          fn={fetchNextPage}
          hasNextPage={hasNextPage}
          height={700}
        >
          {data &&
            data.pages.map((pageData) => {
              return pageData.data.map((item: CategoryProps) => {
                return <CategoryItem key={item.name} data={item} />;
              });
            })}
        </InfiniteScroller>
      </Styled.ItemWrapper>
    </Styled.CategoryContainer>
  );
};

export default Category;
