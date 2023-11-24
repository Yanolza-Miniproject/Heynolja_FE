import { CategoryProps } from "../../../pages/Category/Category.types";
import CategoryItem from "../CatgoryItem";

type CategoryItemPageProps = {
  message: string;
  data: CategoryProps[];
};

type CategoryItemWrapperProps = {
  data: CategoryItemPageProps[];
};

const CategoryItemWrapper = ({ data }: CategoryItemWrapperProps) => {
  return (
    <>
      {data[0].data.length !== 0 ? (
        data.map((pageData) => {
          return pageData.data.map((item: CategoryProps) => {
            return <CategoryItem key={item.name} data={item} />;
          });
        })
      ) : (
        <h1>검색 결과가 없습니다.</h1>
      )}
    </>
  );
};

export default CategoryItemWrapper;
