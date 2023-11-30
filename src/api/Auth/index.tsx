import { baseInstance } from "../../hooks/useAxios";
import { SignInInputs } from "../../pages/Signin/Signin.types";
import { Inputs } from "../../pages/Signup/Signup.types";

export const fetchSignin = async (data: SignInInputs) => {
  const response = await baseInstance.post("members/login", {
    email: data.email,
    password: data.password,
  });

  const returnData = {
    accessToken: response.headers["access_token"],
    refreshToken: response.headers["refresh_token"],
    message: response.data.message,
    memberId: response.data.data.memberId,
    nickname: response.data.data.nickname,
  };

  return returnData;
};

export const fetchSignup = async (data: Inputs) => {
  const response = await baseInstance.post("members/join", {
    email: data.email,
    password: data.password,
    nickname: data.nickname,
    phoneNumber: data.phone,
  });

  return response.data;
};

export type fetchTokenProps = {
  accessToken: string;
  refreshToken: string;
};

export const fetchToken = async (refreshToken: string) => {
  const response = await baseInstance.post("refresh", {
    refreshToken: refreshToken,
  });

  return response.data;
};
