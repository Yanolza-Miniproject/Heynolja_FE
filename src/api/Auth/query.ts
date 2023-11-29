import { useMutation } from "@tanstack/react-query";
import { SignInInputs } from "../../pages/Signin/Signin.types";
import { fetchSignin, fetchSignup } from ".";
import { useNavigate } from "react-router-dom";
import { Inputs } from "../../pages/Signup/Signup.types";

export const useLogin = () => {
  const router = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: SignInInputs) => fetchSignin(data),
    onSuccess: (data) => {
      // 로그인 성공 시 header에서 토큰을 받아와서 localStorage에 저장
      const expirationTime = new Date().getTime() + 1000 * 270;
      localStorage.setItem("expirationTime", expirationTime.toString());
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      alert(data.message);
      router("/");
    },
    onError: (error) => {
      console.log(error);
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
