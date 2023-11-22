import * as Styled from "./CategoryFilter.styles";
import CategoryFilterPopUp from "./CategoryFilterPopUp";

const CategoryFilter = () => {
  return (
    <Styled.CategoryFilterContainer>
      <Styled.CategoryFilterWrapper>
        <CategoryFilterPopUp />
      </Styled.CategoryFilterWrapper>
    </Styled.CategoryFilterContainer>
  );
};

export default CategoryFilter;
