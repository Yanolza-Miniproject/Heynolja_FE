// import {
//   accommoationTypes,
//   regionTypes,
// } from "../components/Category/CategoryFilter/CategoryFilter.constants";

export type SearchListBannerProps = {
  validParams: Param;
};

type Param = {
  region: number;
  type: number;
  category_parking: number;
  category_cooking: number;
  category_pickup: number;
};
