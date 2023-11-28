import {
  accommoationTypes,
  regionTypes,
} from "../components/Category/CategoryFilter/CategoryFilter.constants";
import * as _ from "lodash";

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

export const filterTextDecoder = (validParams: Param) => {
  const { region, type, category_cooking, category_parking, category_pickup } =
    validParams;

  const regionData = {
    valid: region !== 99 || region === null,
    label: _.find(regionTypes, { value: region })?.label || "전체보기",
    url: `&region=${region}`,
  };

  const typeData = {
    valid: type !== 99 || type === null,
    label: _.find(accommoationTypes, { value: type })?.label || "전체보기",
    url: `&type=${type}`,
  };

  const cookingData = {
    valid: category_cooking !== 2 || category_cooking === null,
    label: category_cooking === 1 ? "조리가능" : "조리불가능",
    url: `&categoryCooking=${category_cooking}`,
  };

  const parkingData = {
    valid: category_parking !== 2 || category_parking === null,
    label: category_parking === 1 ? "주차가능" : "주차불가능",
    url: `&categoryParking=${category_parking}`,
  };

  const pickupData = {
    valid: category_pickup !== 2 || category_pickup === null,
    label: category_pickup === 1 ? "픽업가능" : "픽업불가능",
    url: `&categoryPickup=${category_pickup}`,
  };

  const returnArray = [
    regionData,
    typeData,
    cookingData,
    parkingData,
    pickupData,
  ];

  const validArray = _.filter(returnArray, (data) => data.valid);
  return validArray;
};
