import { authInstance } from "../../hooks/useAxios";

export const getMyWishList = async () => {
  const response = await authInstance.get("wish");
  return response.data;
};
