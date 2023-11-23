import * as Styled from "./Category.styles";
import CategoryBanner from "../../components/Category/CategoryBanner";
import { useNavigate } from "react-router-dom";
import CategoryFilter from "../../components/Category/CategoryFilter";
import CategoryQuery from "../../components/Category/CategoryQuery";

const Category = () => {
  const router = useNavigate();

  const handleClickSearch = () => {
    router("/search");
  };

  return (
    <Styled.CategoryContainer>
      <CategoryBanner searchFn={handleClickSearch} />
      <Styled.ItemWrapper>
        <CategoryFilter />
        <CategoryQuery />
      </Styled.ItemWrapper>
    </Styled.CategoryContainer>
  );
};

export default Category;
