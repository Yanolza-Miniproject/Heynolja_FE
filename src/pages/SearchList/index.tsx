import { useNavigate } from "react-router-dom";
import CategoryBanner from "../../components/Category/CategoryBanner";
import CategoryQuery from "../../components/Category/CategoryQuery";
import * as Styled from "./SearchList.styles";
import useGetValidParams from "../../hooks/useGetValidParams";
import SearchListBanner from "../../components/SearchListBanner";
import { resultsSearchQueryAtom } from "../../store/resultsSearchQueryAtom";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";

const SearchList = () => {
  const validParams = useGetValidParams();
  const setResultsSearchQuery = useSetRecoilState(resultsSearchQueryAtom);

  const firstText = "숙소를";
  const secondText = "찾으셨나요?";
  const router = useNavigate();

  useEffect(() => {
    setResultsSearchQuery(validParams);
  }, [validParams, setResultsSearchQuery]);

  const handleClickSearch = () => {
    router("/search");
  };
  return (
    <Styled.SearchResultContainer>
      <CategoryBanner
        firstText={firstText}
        secondText={secondText}
        searchFn={handleClickSearch}
      />
      <Styled.ItemWrapper>
        <SearchListBanner validParams={validParams} />
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
