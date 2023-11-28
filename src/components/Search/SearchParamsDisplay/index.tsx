import * as Styled from "./SearchParamsDisplay.styles";
import { options, regions, types } from "../../../store/searchSelectorData";
import { useRecoilValue } from "recoil";
import { searchStateAtom } from "../../../store/searchSelectorAtom";
import { SearchResetButton } from "../Button";
import { useSearchHandlers } from "../../../hooks/useSearchHandler";

export const SearchParamsDisplay = () => {
  const searchState = useRecoilValue(searchStateAtom);
  const { handleResetSearch } = useSearchHandlers();

  return (
    <Styled.SearchHeader>
      <Styled.SearchTitle>
        <h2>원하시는 숙소를 찾아드릴게요 👀 ❤️</h2>
      </Styled.SearchTitle>
      <Styled.SearchParamsWrapper>
        <Styled.SearchParams>
          <div className="region">
            {`${regions.find(
              (region) => region.value === searchState.selectedRegion,
            )?.name} `}
          </div>

          <div className="type">
            {`${types.find((type) => type.value === searchState.selectedType)
              ?.name} `}
          </div>

          <div className="option">
            {searchState.selectedOptions.map((optionValue, index) => (
              <div className="option-each" key={index}>
                {options.find((option) => option.value === optionValue)?.name}
              </div>
            ))}
          </div>
        </Styled.SearchParams>
        <SearchResetButton onClick={handleResetSearch} />
      </Styled.SearchParamsWrapper>
    </Styled.SearchHeader>
  );
};
