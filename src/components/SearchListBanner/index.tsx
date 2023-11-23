import { useNavigate } from "react-router-dom";
import {
  SearchListBannerProps,
  filterTextDecoder,
} from "../../utils/filterTextDecoder";
import * as Styled from "./SearchList.styles";

const SearchListBanner = ({ validParams }: SearchListBannerProps) => {
  const validArray = filterTextDecoder(validParams);
  const router = useNavigate();

  const handleClickSearch = (url: string) => {
    router(`/results?page=0${url}`);
  };

  return (
    <Styled.SearchListContainer>
      <Styled.SearchListWrapper>
        {validArray.length !== 0 ? (
          validArray.map((item) => {
            return (
              <Styled.SearchListButton
                key={item.label}
                onClick={() => handleClickSearch(item.url)}
              >
                {item.label}
                <br />
              </Styled.SearchListButton>
            );
          })
        ) : (
          <Styled.SearchListText>
            모든 숙소의 검색 결과입니다.
          </Styled.SearchListText>
        )}
      </Styled.SearchListWrapper>
    </Styled.SearchListContainer>
  );
};

export default SearchListBanner;
