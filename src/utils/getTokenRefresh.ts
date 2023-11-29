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
      alert("토큰이 만료되지 않았습니다.");
      return accessToken;
      // 토큰이 만료된 경우
    } else {
      try {
        alert("토큰이 만료되었습니다.");
        const refreshToken = localStorage.getItem("refreshToken");
        alert(refreshToken);
        // 리프레시 토큰이 없는 경우
        if (!refreshToken) {
          alert("리프레시 토큰이 없습니다.");
          return null;
        }

        // 리프레시 토큰이 있는 경우 토큰 갱신
        const response = await fetchToken(refreshToken);

        alert(response.data);

        const expirationTime = new Date().getTime() + 1000 * 270;
        localStorage.setItem("expirationTime", expirationTime.toString());
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        alert("토큰이 갱신되었습니다.");
        return response.data.accessToken;
      } catch {
        alert("토큰 갱신에 실패하였습니다.");
        return null;
      }
    }
  }
};
