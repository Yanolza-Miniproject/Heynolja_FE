import * as Styled from "./SearchList.styles";
// import {
//   accommoationTypes,
//   regionTypes,
// } from "../Category/CategoryFilter/CategoryFilter.constants";

type SearchListBannerProps = {
  validParams: {
    region: number;
    type: number;
    category_parking: number;
    category_cooking: number;
    category_pickup: number;
  };
};

const SearchListBanner = ({ validParams }: SearchListBannerProps) => {
  console.log(validParams);
  return (
    <Styled.SearchListContainer>
      <h1>SearchList</h1>
    </Styled.SearchListContainer>
  );
};

export default SearchListBanner;
