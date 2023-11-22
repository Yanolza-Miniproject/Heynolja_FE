import SearchButton from "../SearchButton";
import * as Styled from "./CategoryBanner.styles";

type CategoryBannerProps = {
  searchFn: () => void;
};

const CategoryBanner = ({ searchFn }: CategoryBannerProps) => {
  return (
    <>
      <Styled.Banner>
        <Styled.CategoryBannerTextMotion
          initial={{ transform: "translateX(0px)", opacity: 0 }}
          animate={{ transform: "transLateX(15%)", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          거기어때?
          <br /> 지금 둘러보세요. 👀
          <Styled.CategoryBannerSearchMotion
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
};

export default CategoryBanner;
