import { useNavigate } from "react-router-dom";
import {
  SearchListBannerProps,
  filterTextDecoder,
} from "../../utils/filterTextDecoder";
import * as Styled from "./SearchList.styles";
import { useRecoilState } from "recoil";
import { categoryViewAtom } from "../../store/categoryViewAtom";
import CategoryFilterViewButton from "../Category/CategoryFilter/CategoryFilterViewButton";

const SearchListBanner = ({ validParams }: SearchListBannerProps) => {
  const validArray = filterTextDecoder(validParams);
  const router = useNavigate();

  const [categoryViewState, setCategoryViewState] =
    useRecoilState(categoryViewAtom);

  const handleClick = () => {
    setCategoryViewState((prev) => !prev);
  };

  const handleClickSearch = (url: string) => {
    router(`/results?page=0${url}`);
  };

  return (
    <Styled.SearchListContainer>
      <Styled.SearchListWrapper>
        <Styled.SearchListQueryText>보기 방식</Styled.SearchListQueryText>
        <Styled.SearchListButtonWrapper>
          <CategoryFilterViewButton
            type="Grid"
            isOn={categoryViewState}
            fn={handleClick}
          />
          <CategoryFilterViewButton
            type="List"
            isOn={categoryViewState}
            fn={handleClick}
          />
        </Styled.SearchListButtonWrapper>
        <Styled.SearchListQueryText>검색 조건</Styled.SearchListQueryText>
        {validArray.length !== 0 ? (
          validArray.map((item) => {
            return (
              <Styled.SearchListButton
                data-testid="search-list-button"
                key={item.label}
                onClick={() => handleClickSearch(item.url)}
                whileHover={{ scale: 1.02 }}
                transition={{
                  duration: 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
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
