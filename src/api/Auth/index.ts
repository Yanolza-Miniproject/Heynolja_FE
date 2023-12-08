import { baseInstance } from "../../hooks/useAxios";
import { SignInInputs } from "../../pages/Signin/Signin.types";
import { Requests } from "../../pages/Signup/Signup.types";
import { setSessionStorage } from "../../utils/setSessionStorage";

export const fetchSignin = async ({ email, password }: SignInInputs) => {
  const { data, headers } = await baseInstance.post("members/login", {
    email,
    password,
  });

  const returnData = {
    accessToken: headers["access_token"],
    refreshToken: headers["refresh_token"],
    message: data.message,
    memberId: data.data.memberId,
    nickname: data.data.nickname,
  };

  return returnData;
};

export const fetchSignup = async (data: Requests) => {
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
  try {
    const response = await baseInstance.post("/refresh", {
      refreshToken: refreshToken,
    });

    setSessionStorage(response.data.accessToken, response.data.refreshToken);

    return response.data.accessToken;
  } catch (error) {
    return error;
  }
};
