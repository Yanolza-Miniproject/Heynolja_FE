import * as Styled from "./CategoryFilter.styles";
import CategoryFilterPopUp from "./CategoryFilterPopUp";
import { accommoationTypes, regionTypes } from "./CategoryFilter.constants";

const CategoryFilter = () => {
  return (
    <Styled.CategoryFilterContainer>
      <Styled.CategoryFilterWrapper>
        <CategoryFilterPopUp
          listData={accommoationTypes}
          buttonText="원하는 숙소를 찾아보세요"
        />
        <CategoryFilterPopUp
          listData={regionTypes}
          buttonText="원하는 장소를 찾아보세요"
        />
      </Styled.CategoryFilterWrapper>
    </Styled.CategoryFilterContainer>
  );
};

export default CategoryFilter;
