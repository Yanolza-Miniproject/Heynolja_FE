import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { getTokenRefresh } from "../utils/getTokenRefresh";
import { useAuthAlert as swal } from "./useAlert";

// 토큰 추가 함수
const addTokenToHeader = async (config: InternalAxiosRequestConfig) => {
  const token = await getTokenRefresh();

  if (!token) {
    swal();
  }
  config.headers.access_token = token;

  return config;
};

// 에러 핸들링 함수
const logErrorInterceptor = (error: AxiosError) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      console.log("response가 있는 경우", error);
      return Promise.reject(axiosError.response);
    } else if (axiosError.request) {
      return Promise.reject(axiosError.request);
    } else {
      return Promise.reject(axiosError.message);
    }
  }
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
