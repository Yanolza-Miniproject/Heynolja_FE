import {
  accommoationTypes,
  regionTypes,
} from "../components/Category/CategoryFilter/CategoryFilter.constants";
import { find, filter } from "lodash-es";
import { CategoryFilterParams } from "../pages/Category/Category.types";

const checkIsValid = (value: number | boolean, min: number, max: number) => {
  if (typeof value === "number" && min <= value && value <= max) {
    return true;
  }
  return false;
};

const getValidLabel = (
  array: { label: string; value: number }[],
  value: number | boolean,
) => {
  if (typeof value === "number") {
    return find(array, { value })?.label || "전체보기";
  }
  return "전체보기";
};

export const filterTextDecoder = (props: CategoryFilterParams) => {
  const { region01, type, categoryCooking, categoryParking, categoryPickup } =
    props;

  const regionData = {
    valid: checkIsValid(region01, 0, 9),
    label: getValidLabel(regionTypes, region01),
    url: `&region=${region01}`,
  };

  const typeData = {
    valid: checkIsValid(type, 0, 6),
    label: getValidLabel(accommoationTypes, type),
    url: `&type=${type}`,
  };

  const cookingData = {
    valid: checkIsValid(categoryCooking, 0, 1),
    label: categoryCooking === 1 ? "조리가능" : "조리불가능",
    url: `&categoryCooking=${categoryCooking}`,
  };

  const parkingData = {
    valid: checkIsValid(categoryParking, 0, 1),
    label: categoryParking === 1 ? "주차가능" : "주차불가능",
    url: `&categoryParking=${categoryParking}`,
  };

  const pickupData = {
    valid: checkIsValid(categoryPickup, 0, 1),
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

  const validArray = filter(returnArray, (data) => data.valid);
  return validArray;
};
