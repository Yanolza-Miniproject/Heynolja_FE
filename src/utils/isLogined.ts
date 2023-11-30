export const isLogined = () => {
  return (
    !!sessionStorage.getItem("accessToken") &&
    !!sessionStorage.getItem("refreshToken")
  );
};
