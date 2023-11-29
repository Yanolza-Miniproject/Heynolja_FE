import { fetchToken } from "../api/Auth";

export const getTokenRefresh = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const expirationTime = localStorage.getItem("expirationTime");

  // 토큰이 있는 경우
  if (accessToken && expirationTime) {
    const currentTime = new Date().getTime();
    const isExpired = Number(expirationTime) - currentTime < 0;

    // 토큰이 만료되지 않은 경우
    if (!isExpired) {
      return accessToken;
      // 토큰이 만료된 경우
    } else {
      try {
        const refreshToken = await localStorage.getItem("refreshToken");
        // 리프레시 토큰이 없는 경우
        if (!refreshToken) {
          return null;
        }

        // 리프레시 토큰이 있는 경우 토큰 갱신
        const response = await fetchToken({
          accessToken: accessToken,
          refreshToken: refreshToken,
        });

        const expirationTime = new Date().getTime() + 1000 * 270;
        localStorage.setItem("expirationTime", expirationTime.toString());
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        return response.data.accessToken;
      } catch {
        return null;
      }
    }
  }
};
