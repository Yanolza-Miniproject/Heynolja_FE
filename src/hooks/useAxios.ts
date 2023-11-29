import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

// 토큰 추가 함수
const addTokenToHeader = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.access_token = token;
  }

  return config;
};

// 에러 핸들링 함수
const logErrorInterceptor = (error: AxiosError) => {
  console.error("error", error);
  console.log("에러 발생");
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
    (error) => logErrorInterceptor(error),
  );
  instance.interceptors.response.use(
    (response) => response,
    (error) => logErrorInterceptor(error),
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
