import { baseInstance } from "../../hooks/useAxios";
import { fetchCatgoryProps } from "../../pages/Category/Category.types";

export const fetchCatgory = async ({
  pageParam,
  regionUrl,
  typeUrl,
  categoryParkingUrl,
  categoryCookingUrl,
  categoryPickupUrl,
}: fetchCatgoryProps) => {
  const data = await baseInstance.get(
    `accommodations?page=${pageParam}${regionUrl}${typeUrl}${categoryParkingUrl}${categoryCookingUrl}${categoryPickupUrl}`,
  );
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
