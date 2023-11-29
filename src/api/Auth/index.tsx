import { baseInstance } from "../../hooks/useAxios";
import { SignInInputs } from "../../pages/Signin/Signin.types";
import { Inputs } from "../../pages/Signup/Signup.types";

export const fetchSignin = async (data: SignInInputs) => {
  const response = await baseInstance.post("members/login", {
    email: data.email,
    password: data.password,
  });

  return response.data;
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
