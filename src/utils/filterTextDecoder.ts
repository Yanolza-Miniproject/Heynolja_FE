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
  categoryParking: number;
  categoryCooking: number;
  categoryPickup: number;
};

export const filterTextDecoder = (validParams: Param) => {
  const { region, type, categoryCooking, categoryParking, categoryPickup } =
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
    valid: categoryCooking !== 2 || categoryCooking === null,
    label: categoryCooking === 1 ? "조리가능" : "조리불가능",
    url: `&categoryCooking=${categoryCooking}`,
  };

  const parkingData = {
    valid: categoryParking !== 2 || categoryParking === null,
    label: categoryParking === 1 ? "주차가능" : "주차불가능",
    url: `&categoryParking=${categoryParking}`,
  };

  const pickupData = {
    valid: categoryPickup !== 2 || categoryPickup === null,
    label: categoryPickup === 1 ? "픽업가능" : "픽업불가능",
    url: `&categoryPickup=${categoryPickup}`,
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
