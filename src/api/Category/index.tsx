import axios from "axios";
import { fetchCatgoryProps } from "../../pages/Category/Category.types";

export const fetchCatgory = async ({
  pageParam,
  region,
  type,
  category_parking,
  category_cooking,
  category_pickup,
}: fetchCatgoryProps) => {
  const data = await axios.get(
    `/api/v1/accommodations?region=${region}&page=${pageParam}&type=${type}&category_parking=${category_parking}&category_cooking=${category_cooking}&category_pickup=${category_pickup}`,
  );
  return data.data;
};
