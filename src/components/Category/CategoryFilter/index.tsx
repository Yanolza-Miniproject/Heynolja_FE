import * as Styled from "./CategoryFilter.styles";
import CategoryFilterPopUp from "./CategoryFilterPopUp";
import { accommoationTypes, regionTypes } from "./CategoryFilter.constants";
import { categoryViewAtom } from "../../../store/categoryViewAtom";
import { useRecoilState } from "recoil";
import CategoryFilterViewButton from "./CategoryFilterViewButton";

const CategoryFilter = () => {
  const [categoryViewState, setCategoryViewState] =
    useRecoilState(categoryViewAtom);

  const handleClick = () => {
    setCategoryViewState((prev) => !prev);
  };

  console.log(categoryViewState);

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
        <Styled.CategoryViewButtonWrapper>
          <CategoryFilterViewButton
            buttonText="바둑판보기"
            isOn={false}
            fn={handleClick}
          />
          <CategoryFilterViewButton
            buttonText="리스트보기"
            isOn={true}
            fn={handleClick}
          />
        </Styled.CategoryViewButtonWrapper>
      </Styled.CategoryFilterWrapper>
    </Styled.CategoryFilterContainer>
  );
};

export default CategoryFilter;
