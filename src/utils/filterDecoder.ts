export type CategoryFilterParams = {
  region: number;
  type: number;
  category_parking: number;
  category_cooking: number;
  category_pickup: number;
};

export const checkCategoryQueryUrl = ({
  region,
  type,
  category_parking,
  category_cooking,
  category_pickup,
}: CategoryFilterParams) => {
  const queryObjects = {
    regionUrl: region !== 99 && region !== undefined ? `&region=${region}` : "",
    typeUrl: type !== 99 && type !== undefined ? `&type=${type}` : "",
    category_parkingUrl:
      category_parking !== 2 && category_parking !== undefined
        ? `&category_parking=${category_parking}`
        : "",
    category_cookingUrl:
      category_cooking !== 2 && category_cooking !== undefined
        ? `&category_cooking=${category_cooking}`
        : "",
    category_pickupUrl:
      category_pickup !== 2 && category_pickup !== undefined
        ? `&category_pickup=${category_pickup}`
        : "",
  };

  return queryObjects;
};
