import { memo } from "react";
import SearchButton from "../SearchButton";
import * as Styled from "./CategoryBanner.styles";
import { CategoryBannerProps } from "./CategoryBanner.types";

const CategoryBanner = memo(
  ({ searchFn, firstText, secondText }: CategoryBannerProps) => {
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
        </Styled.Banner>
      </>
    );
  },
);

export default CategoryBanner;
