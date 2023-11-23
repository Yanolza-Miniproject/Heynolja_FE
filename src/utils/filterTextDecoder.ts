import {
  accommoationTypes,
  regionTypes,
} from "../components/Category/CategoryFilter/CategoryFilter.constants";

export type SearchListBannerProps = {
  validParams: {
    region: number;
    type: number;
    category_parking: number;
    category_cooking: number;
    category_pickup: number;
  };
};

export const exportText = ({ validParams }: SearchListBannerProps) => {
  const exportTextObject = {
    regionText:
      validParams.region !== 99
        ? `${regionTypes[validParams.region].label}의`
        : "전국의",

    typeText:
      validParams.type !== 99
        ? `${accommoationTypes[validParams.type].label}을`
        : "모든 숙소를",

    categoryText: {
      parking:
        validParams.category_parking === 1
          ? "주차가 가능한"
          : validParams.category_parking === 0
            ? "주차가 불가능한"
            : "",

      cooking:
        validParams.category_cooking === 1
          ? "조리가 가능한"
          : validParams.category_cooking === 0
            ? "조리가 불가능한"
            : "",

      pickup:
        validParams.category_pickup === 1
          ? "픽업이 가능한"
          : validParams.category_pickup === 0
            ? "픽업이 불가능한"
            : "",
    },
  };

  const categoryText = `${exportTextObject.categoryText.parking} ${exportTextObject.categoryText.cooking} ${exportTextObject.categoryText.pickup}`;

  const fullText = `${exportTextObject.regionText} ${categoryText} ${exportTextObject.typeText} 검색한 결과입니다.`;

  return fullText;
};
