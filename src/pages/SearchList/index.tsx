import { useNavigate } from "react-router-dom";
import CategoryBanner from "../../components/Category/CategoryBanner";
import CategoryQuery from "../../components/Category/CategoryQuery";
import * as Styled from "./SearchList.styles";
import useGetValidParams from "../../hooks/useGetValidParams";

const SearchList = () => {
  const validParams = useGetValidParams();
  console.log(validParams);
  const router = useNavigate();

  const handleClickSearch = () => {
    router("/search");
  };
  return (
    <Styled.SearchResultContainer>
      <CategoryBanner searchFn={handleClickSearch} />
      <Styled.ItemWrapper>
        <CategoryQuery
          regionNumber={validParams.region}
          accommodationNumber={validParams.type}
          category_parking={validParams.category_parking}
          category_cooking={validParams.category_cooking}
          category_pickup={validParams.category_pickup}
        />
      </Styled.ItemWrapper>
    </Styled.SearchResultContainer>
  );
};

export default SearchList;
