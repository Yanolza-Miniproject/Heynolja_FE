export const isLoggedIn = () => {
  return (
    !!sessionStorage.getItem("accessToken") &&
    !!sessionStorage.getItem("refreshToken")
  );
};
