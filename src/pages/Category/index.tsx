import * as Styled from "./Category.styles";
import React from "react";
import CategoryBanner from "../../components/Category/CategoryBanner";
import { useNavigate } from "react-router-dom";
import CategoryFilter from "../../components/Category/CategoryFilter";
import CategoryQuery from "../../components/Category/CategoryQuery";
import { categoryQueryAtom } from "../../store/categoryQueryAtom";
import { useRecoilValue } from "recoil";

const Category = () => {
  const atomState = useRecoilValue(categoryQueryAtom);
  const regionNumber = atomState.region;
  const accommodationNumber = atomState.type;
  const router = useNavigate();

  const handleClickSearch = () => {
    router("/search");
  };

  return (
    <Styled.CategoryContainer>
      <CategoryBanner
        firstText="거기어때?"
        secondText="지금 둘러보세요."
        searchFn={handleClickSearch}
      />
      <Styled.ItemWrapper>
        <CategoryFilter />
        <CategoryQuery
          regionNumber={regionNumber}
          accommodationNumber={accommodationNumber}
        />
      </Styled.ItemWrapper>
    </Styled.CategoryContainer>
  );
};

export default Category;
