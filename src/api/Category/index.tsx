import { baseInstance } from "../../hooks/useAxios";
import axios from "axios";
import { fetchCatgoryProps } from "../../pages/Category/Category.types";

export const fetchCatgory = async ({
  pageParam,
  regionUrl,
  typeUrl,
  categoryParkingUrl,
  categoryCookingUrl,
  categoryPickupUrl,
}: fetchCatgoryProps) => {
  const data = await axios.get(
    `http://211.221.220.124:8080/api/v1/accommodations?page=${pageParam}${regionUrl}${typeUrl}${categoryParkingUrl}${categoryCookingUrl}${categoryPickupUrl}`,
  );
  console.log(data.data);
  return data.data;
};

export const postClickHeart = async (accommodationId: string) => {
  const data = await baseInstance.post(`/wish/${accommodationId}`);
  return data.data;
};

export const deleteClickHeart = async (accommodationId: string) => {
  const data = await baseInstance.delete(`/wish/${accommodationId}`);
  return data.data;
};
