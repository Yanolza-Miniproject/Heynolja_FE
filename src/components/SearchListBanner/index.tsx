import { SearchListBannerProps } from "../../utils/filterTextDecoder";
import * as Styled from "./SearchList.styles";

const SearchListBanner = ({ validParams }: SearchListBannerProps) => {
  console.log(validParams);
  return (
    <Styled.SearchListContainer>
      <Styled.SearchListText>{` `}</Styled.SearchListText>
    </Styled.SearchListContainer>
  );
};

export default SearchListBanner;
