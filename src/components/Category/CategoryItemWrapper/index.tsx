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
      {data.map((pageData) => {
        return pageData.data.map((item: CategoryProps) => {
          return <CategoryItem key={item.name} data={item} />;
        });
      })}
    </>
  );
};

export default CategoryItemWrapper;
