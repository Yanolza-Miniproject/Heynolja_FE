import { fetchToken } from "../api/Auth";
import { setSessionStorage } from "./setSessionStorage";

export const getTokenRefresh = async () => {
  const accessToken = sessionStorage.getItem("accessToken");
  const expirationTime = sessionStorage.getItem("expirationTime");

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
        alert("토큰이 만료되었습니다. 재발급합니다.");
        const refreshToken = sessionStorage.getItem("refreshToken");

        if (!refreshToken) {
          return null;
        }

        // 리프레시 토큰이 있는 경우 토큰 갱신
        const response = await fetchToken(refreshToken);
        setSessionStorage(
          response.data.accessToken,
          response.data.refreshToken,
        );

        return response.data.accessToken;
      } catch {
        return null;
      }
    }
  }

  // 토큰이 없는 경우
  else {
    return null;
  }
};
