import * as Styled from "../SearchSelector.styles";
import MapIcon from "../../../../assets/svg/map-icon.svg";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSearchHandlers } from "../../../../hooks/useSearchHandler";
import { searchStateAtom } from "../../../../store/searchSelectorAtom";

type Region = {
  name: string;
  value: number;
};

type RegionWrapperProps = {
  regions: Region[];
};

export const RegionWrapper = ({ regions }: RegionWrapperProps) => {
  const searchState = useRecoilValue(searchStateAtom);
  const setSearchState = useSetRecoilState(searchStateAtom);
  const { handleRegionClick } = useSearchHandlers();

  return (
    <Styled.SearchCardWrapper
      onMouseEnter={() =>
        setSearchState((current) => ({ ...current, isRegionHovered: true }))
      }
      onMouseLeave={() =>
        setSearchState((current) => ({ ...current, isRegionHovered: false }))
      }
    >
      <span>
        Check 1<h2>지역 선택</h2>
        {!searchState.isRegionHovered && (
          <img src={MapIcon} alt="region-selector" />
        )}
      </span>
      {searchState.isRegionHovered && (
        <Styled.RegionList>
          {regions.map((region) => (
            <Styled.RegionItem
              key={region.value}
              selected={searchState.selectedRegion === region.value}
              onClick={() => handleRegionClick(region.value)}
            >
              {region.name}
            </Styled.RegionItem>
          ))}
        </Styled.RegionList>
      )}
      {!searchState.isRegionHovered && searchState.isRegionSelected && (
        <Styled.SelectedItemDisplay>
          {!searchState.isRegionHovered &&
            regions.find(
              (region) => region.value === searchState.selectedRegion,
            )?.name}{" "}
          ✔️
        </Styled.SelectedItemDisplay>
      )}
    </Styled.SearchCardWrapper>
  );
};
