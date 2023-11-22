import axios from "axios";
import * as Styled from "./Category.styles";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CategoryProps } from "./Category.types";
import CategoryItem from "../../components/Category/CatgoryItem";
import InfiniteScroller from "../../components/Category/InfiniteScroller";

type fetchCatgoryProps = {
  pageParam: number;
};

const fetchCatgory = async ({ pageParam }: fetchCatgoryProps) => {
  const data = await axios.get("/api/v1/accommodations?page=" + pageParam);
  return data.data;
};

const Category = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["category"],
    queryFn: fetchCatgory,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.data.length === 0) return undefined;
      return lastPageParam + 1;
    },
  });

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
