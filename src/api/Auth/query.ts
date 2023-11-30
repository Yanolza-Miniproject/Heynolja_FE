import { useMutation } from "@tanstack/react-query";
import { SignInInputs } from "../../pages/Signin/Signin.types";
import { fetchSignin, fetchSignup } from ".";
import { useNavigate } from "react-router-dom";
import { Inputs } from "../../pages/Signup/Signup.types";
import { userDataAtom } from "../../store/userDataAtom";
import { useSetRecoilState } from "recoil";
import { setSessionStorage } from "../../utils/setSessionStorage";

export const useLogin = () => {
  const router = useNavigate();
  const setUserData = useSetRecoilState(userDataAtom);

  const mutation = useMutation({
    mutationFn: (data: SignInInputs) => fetchSignin(data),
    onSuccess: (data) => {
      setSessionStorage(data.accessToken, data.refreshToken);
      setUserData((prev) => ({
        ...prev,
        nickName: data.nickname,
        memberId: data.memberId,
      }));
      alert(data.message);
      router("/");
    },
    onError: (error) => {
      console.log(error);
      error.message === "잘못된 정보입니다"
        ? alert("잘못된 정보입니다.")
        : alert("잘못된 로그인 정보입니다.");
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
