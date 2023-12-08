import * as Styled from "./Category.styles";
import CategoryBanner from "../../components/Category/CategoryBanner";
import CategoryFilter from "../../components/Category/CategoryFilter";
import CategoryQuery from "../../components/Category/CategoryQuery";
import { categoryQueryAtom } from "../../store/categoryQueryAtom";
import { useRecoilValue } from "recoil";

const Category = () => {
  const atomState = useRecoilValue(categoryQueryAtom);
  const regionNumber = atomState.region;
  const accommodationNumber = atomState.type;

  return (
    <Styled.CategoryContainer>
      <CategoryBanner firstText="Hey 놀자!" secondText="지금 둘러보세요." />
      <Styled.ItemWrapper>
        <Styled.Main>
          <CategoryQuery
            regionNumber={regionNumber}
            accommodationNumber={accommodationNumber}
          />
        </Styled.Main>
        <Styled.Aside>
          <CategoryFilter />
        </Styled.Aside>
      </Styled.ItemWrapper>
    </Styled.CategoryContainer>
  );
};

export default Category;
