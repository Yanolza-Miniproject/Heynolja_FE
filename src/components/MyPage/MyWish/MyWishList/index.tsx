import { useGetMyWishList } from "../../../../api/MyPage/query";
import { CategoryProps } from "../../../../pages/Category/Category.types";

const MyWishList = () => {
  const { data, isLoading, error } = useGetMyWishList();

  if (error) return <div>에러발생</div>;

  return (
    <div>
      <div>
        {data &&
          data.data.map((item: CategoryProps) => {
            return (
              <div key={item.name}>
                <div>{item.name}</div>
              </div>
            );
          })}
      </div>
      {isLoading && <div>로딩중</div>}
    </div>
  );
};

export default MyWishList;
