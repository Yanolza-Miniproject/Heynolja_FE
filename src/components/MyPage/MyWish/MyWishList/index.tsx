import { useGetMyWishList } from "../../../../api/MyPage/query";
import * as Styled from "./MyWishList.styles";
import { CategoryProps } from "../../../../pages/Category/Category.types";
import CategoryItem from "../../../Category/CatgoryItem";
import MyWishHeader from "../MyWishHeader";

const MyWishList = () => {
  const { data, isLoading, error } = useGetMyWishList();

  if (error) return <div>에러발생</div>;

  return (
    <>
      <MyWishHeader wishCount={data?.data.length} />
      <Styled.ListGridItemWrapper>
        {data &&
          data.data.map((item: CategoryProps) => {
            return <CategoryItem key={item.name} data={item} />;
          })}
        {isLoading && <div>로딩중</div>}
      </Styled.ListGridItemWrapper>
    </>
  );
};

export default MyWishList;
