export const setSessionStorage = (
  accessToken: string,
  refreshToken: string,
) => {
  const expirationTime = new Date().getTime() + 1000 * 270;
  sessionStorage.setItem("expirationTime", expirationTime.toString());
  sessionStorage.setItem("accessToken", accessToken);
  sessionStorage.setItem("refreshToken", refreshToken);
};
