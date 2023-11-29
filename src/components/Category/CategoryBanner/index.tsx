import { memo } from "react";
import SearchButton from "../SearchButton";
import * as Styled from "./CategoryBanner.styles";
import { CategoryBannerProps } from "./CategoryBanner.types";
import { authInstance } from "../../../hooks/useAxios";
import { fetchToken } from "../../../api/Auth";

const CategoryBanner = memo(
  ({ searchFn, firstText, secondText }: CategoryBannerProps) => {
    const handleTest = async () => {
      const results = await authInstance.get("wish");
      console.log(results);
    };

    const handleRefreshTest = async () => {
      const refreshToken = localStorage.getItem("refreshToken");
      alert(refreshToken);
      const results = await fetchToken(refreshToken!);
      alert(results);
    };
    return (
      <>
        <Styled.Banner>
          <Styled.CategoryBannerTextMotion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>{firstText}</p>
            <p>{secondText}</p>
            <Styled.CategoryBannerSearchMotion
              data-testid="search-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.3 }}
              onClick={searchFn}
            >
              <SearchButton />
            </Styled.CategoryBannerSearchMotion>
          </Styled.CategoryBannerTextMotion>
          <button type="button" onClick={handleTest}>
            안녕
          </button>
          <button type="button" onClick={handleRefreshTest}>
            리프래쉬
          </button>
        </Styled.Banner>
      </>
    );
  },
);

export default CategoryBanner;
