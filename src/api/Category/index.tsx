import axios from "axios";
import { fetchCatgoryProps } from "../../pages/Category";

export const fetchCatgory = async ({
  pageParam,
  region,
  type,
}: fetchCatgoryProps) => {
  const data = await axios.get(
    `/api/v1/accommodations?region=${region}&page=${pageParam}&type=${type}`,
  );
  return data.data;
};
