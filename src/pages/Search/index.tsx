import * as Styled from "./Search.styles";
import { SearchButton } from "../../components/Search/Button";
import { options, regions, types } from "../../store/searchSelectorData";
import { useSendSearchQuery } from "../../hooks/useSendSearchQuery";
import { RegionWrapper } from "../../components/Search/SearchSelector/SearchRegion";
import { TypeWrapper } from "../../components/Search/SearchSelector/SearchType";
import { OptionsWrapper } from "../../components/Search/SearchSelector/SearchOptions";
import { SearchParamsDisplay } from "../../components/Search/SearchParamsDisplay";

const Search = () => {
  const sendSearchQuery = useSendSearchQuery();

  return (
    <Styled.Container>
      <SearchParamsDisplay />
      <Styled.SearchCard>
        <RegionWrapper regions={regions} />
        <TypeWrapper types={types} />
        <OptionsWrapper options={options} />
        <SearchButton onClick={sendSearchQuery} />
      </Styled.SearchCard>
    </Styled.Container>
  );
};

export default Search;
