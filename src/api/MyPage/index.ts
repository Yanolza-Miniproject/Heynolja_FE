import axios from "axios";

export const getMyWishList = async () => {
  const response = await axios.get("/api/v1/wish");
  return response.data;
};
