import { useNavigate } from "react-router-dom";
import * as Styled from "./SearchButton.styles";

const SearchButton = () => {
  const router = useNavigate();
  const handleClick = () => {
    router("/search");
  };
  return (
    <>
      <Styled.SearchButton onClick={handleClick}>
        원하는 검색지를 찾아보세요 🕵️‍♀️
      </Styled.SearchButton>
    </>
  );
};

export default SearchButton;
