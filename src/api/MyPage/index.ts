import axios from "axios";
import { authInstance } from "../../hooks/useAxios";

export const getMyWishList = async () => {
  const response = await authInstance.get("/api/v1/wish");
  return response.data;
};
