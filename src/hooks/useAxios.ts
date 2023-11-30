import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { getTokenRefresh } from "../utils/getTokenRefresh";

// const getAccessToken = (tokenName: string) => localStorage.getItem(tokenName);
// const setAccessToken = (token: string, expireTime: number) => {
//   const expirationTime = new Date().getTime() + expireTime * 1000 * 60;
//   localStorage.setItem("access_token", token);
//   localStorage.setItem("access_token_expiration", expirationTime.toString());
// };
// const getRefreshToken = () => localStorage.getItem("refresh_token");
// const setRefreshToken = (token: string) =>
//   localStorage.setItem("refresh_token", token);

// 토큰 추가 함수
const addTokenToHeader = async (config: InternalAxiosRequestConfig) => {
  const token = await getTokenRefresh();

  if (!token) {
    // window.location.href = "/login";
    console.log("토큰이 없습니다.");
  }
  config.headers.access_token = token;

  return config;
};

// 에러 핸들링 함수
const logErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};

// 인증 필요 에러 핸들링 함수

const logAuthErrorInterceptor = (error: AxiosError) => {
  return Promise.reject(error);
};

// 인증 필요 없는 경우
const baseInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => config,
    (error) => logErrorInterceptor(error),
  );
  instance.interceptors.response.use(
    (response) => response,
    (error) => logErrorInterceptor(error),
  );
};

// 인증 필요한 경우
const authInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => addTokenToHeader(config),
    (error) => logAuthErrorInterceptor(error),
  );
  instance.interceptors.response.use(
    (response) => response,
    (error) => logAuthErrorInterceptor(error),
  );
};

// axios인스턴스 생성 (인증x)
const base = () => {
  const instance = axios.create({
    baseURL: "/api",
    timeout: 1000,
  });

  baseInterceptors(instance);

  return instance;
};

// axios인스턴스 생성 (인증o)
const auth = () => {
  const instance = axios.create({
    baseURL: "/api",
    timeout: 1000,
  });

  authInterceptors(instance);

  return instance;
};

export const baseInstance = base();
export const authInstance = auth();
