import { memo } from "react";
import SearchButton from "../SearchButton";
import * as Styled from "./CategoryBanner.styles";
import { CategoryBannerProps } from "./CategoryBanner.types";

const CategoryBanner = memo(
  ({ bannerMainText, bannerSubText }: CategoryBannerProps) => {
    return (
      <>
        <Styled.Banner>
          <Styled.CategoryBannerWrapper>
            <Styled.CategoryBannerTextMotion
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div>
                <Styled.CategoryBannerTextWrapper>
                  <p>{bannerMainText}</p>
                  <p>{bannerSubText}</p>
                </Styled.CategoryBannerTextWrapper>
                <Styled.CategoryBannerSearchMotion
                  data-testid="search-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.3 }}
                >
                  <SearchButton />
                </Styled.CategoryBannerSearchMotion>
              </div>
            </Styled.CategoryBannerTextMotion>
          </Styled.CategoryBannerWrapper>
        </Styled.Banner>
      </>
    );
  },
);

export default CategoryBanner;
