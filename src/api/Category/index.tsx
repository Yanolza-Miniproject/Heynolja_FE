import axios from "axios";
import { fetchCatgoryProps } from "../../pages/Category/Category.types";
import { baseInstance } from "../../hooks/useAxios";

export const fetchCatgory = async ({
  pageParam,
  regionUrl,
  typeUrl,
  categoryParkingUrl,
  categoryCookingUrl,
  categoryPickupUrl,
}: fetchCatgoryProps) => {
  const data = await axios.get(
    `https://free-toad-alive.ngrok-free.app/api/v1/accommodations?page=${pageParam}${regionUrl}${typeUrl}${categoryParkingUrl}${categoryCookingUrl}${categoryPickupUrl}`,
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
