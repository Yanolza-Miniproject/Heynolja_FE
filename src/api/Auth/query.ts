import { useMutation } from "@tanstack/react-query";
import { SignInInputs } from "../../pages/Signin/Signin.types";
import { fetchSignin, fetchSignup, fetchToken, fetchTokenProps } from ".";
import { useNavigate } from "react-router-dom";
import { Inputs } from "../../pages/Signup/Signup.types";

export const useLogin = () => {
  const router = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: SignInInputs) => fetchSignin(data),
    onSuccess: (data) => {
      alert(data.message);
      router("/");
    },
    onError: () => {
      alert("잘못된 로그인 정보입니다.");
    },
  });

  return mutation;
};

export const useSignUp = () => {
  const router = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: Inputs) => fetchSignup(data),
    onSuccess: (data) => {
      alert(data.message);
      router("/");
    },
    onError: () => {
      alert("잘못된 회원가입 정보입니다.");
    },
  });

  return mutation;
};

type useFetchTokenProps = {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const useTokenRefresh = () => {
  const mutation = useMutation({
    mutationFn: (data: fetchTokenProps) => fetchToken(data),
    onSuccess: (data: useFetchTokenProps) => {
      const expirationTime = new Date().getTime() + 1000 * 270;
      localStorage.setItem("expirationTime", expirationTime.toString());
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);
    },
    onError: () => {
      alert("토큰 갱신에 실패하였습니다.");
    },
  });

  return mutation;
};
