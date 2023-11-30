import CategoryBanner from "../../components/Category/CategoryBanner";
import CategoryQuery from "../../components/Category/CategoryQuery";
import * as Styled from "./SearchList.styles";
import useGetValidParams from "../../hooks/useGetValidParams";
import SearchListBanner from "../../components/SearchListBanner";

const SearchList = () => {
  const validParams = useGetValidParams();

  const firstText = "숙소를";
  const secondText = "찾으셨나요?";

  return (
    <Styled.SearchResultContainer>
      <CategoryBanner firstText={firstText} secondText={secondText} />
      <Styled.ItemWrapper>
        <Styled.Main>
          <CategoryQuery
            regionNumber={validParams.region}
            accommodationNumber={validParams.type}
            categoryParking={validParams.categoryParking}
            categoryCooking={validParams.categoryCooking}
            categoryPickup={validParams.categoryPickup}
          />
        </Styled.Main>
        <Styled.Aside>
          <SearchListBanner validParams={validParams} />
        </Styled.Aside>
      </Styled.ItemWrapper>
    </Styled.SearchResultContainer>
  );
};

export default SearchList;
