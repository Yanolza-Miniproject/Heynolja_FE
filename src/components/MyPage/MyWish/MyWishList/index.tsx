import { useGetMyWishList } from "../../../../api/MyPage/query";
import * as Styled from "./MyWishList.styles";
import { myWishDataProps } from "../../../../pages/Category/Category.types";
import MyWishHeader from "../MyWishHeader";
import MyWishItem from "./MyWishItem";

const MyWishList = () => {
  const { data, isLoading, error } = useGetMyWishList();

  if (error) return <div>에러발생</div>;

  return (
    <>
      <MyWishHeader wishCount={data?.data.length} />
      <Styled.ListGridItemWrapper>
        {data &&
          data.data.map((item: myWishDataProps) => {
            return (
              <MyWishItem
                key={item.accommodation.name}
                data={item.accommodation}
              />
            );
          })}
        {isLoading && <div></div>}
      </Styled.ListGridItemWrapper>
    </>
  );
};

export default MyWishList;
