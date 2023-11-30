import * as Styled from "./CategoryFilter.styles";
import CategoryFilterPopUp from "./CategoryFilterPopUp";
import { accommoationTypes, regionTypes } from "./CategoryFilter.constants";
import { fetchToken } from "../../../api/Auth";

const CategoryFilter = () => {
  const handleClick = async () => {
    const refreshToken = sessionStorage.getItem("refreshToken");
    if (refreshToken) {
      alert("로그인 되어있음");
      console.log("검색버튼 클릭", refreshToken);

      const response = await fetchToken(refreshToken);
      console.log(response);
    } else {
      alert("로그인 안되어있음");
    }
  };

  return (
    <Styled.CategoryFilterContainer>
      <Styled.CategoryFilterWrapper>
        <CategoryFilterPopUp
          listData={accommoationTypes}
          buttonText="원하는 숙소를 찾아보세요"
        />
        <CategoryFilterPopUp
          listData={regionTypes}
          buttonText="원하는 장소를 찾아보세요"
        />
        <button type="button" onClick={handleClick}>
          검색
        </button>
      </Styled.CategoryFilterWrapper>
    </Styled.CategoryFilterContainer>
  );
};

export default CategoryFilter;
