import axios from "axios";

export const getMyWishList = async () => {
  const response = await axios.get("/api/v1/wish", {
    headers: {
      Authorization: "김토큰",
    },
  });
  return response.data;
};
