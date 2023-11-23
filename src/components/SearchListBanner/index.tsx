import {
  SearchListBannerProps,
  exportText,
} from "../../utils/filterTextDecoder";
import * as Styled from "./SearchList.styles";

const SearchListBanner = ({ validParams }: SearchListBannerProps) => {
  const fullText = exportText({ validParams });
  return (
    <Styled.SearchListContainer>
      <Styled.SearchListText>{fullText}</Styled.SearchListText>
    </Styled.SearchListContainer>
  );
};

export default SearchListBanner;
