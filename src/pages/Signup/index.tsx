import InputText from "../../components/Signin/InputText";
import * as Styled from "./Signup.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { Requests } from "./Signup.types";
import { InputProps } from "./Signup.constant";
import { useSignUp } from "../../api/Auth/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "이메일 형식에 맞춰 작성해주세요" })
    .email(),
  password: z
    .string()
    .min(8, {
      message: "비밀번호는 8자 이상으로 입력해주세요",
    })
    .max(20),
  nickname: z
    .string()
    .min(2, {
      message: "닉네임은 2자 이상으로 입력해주세요",
    })
    .max(20),
  phone: z
    .string()
    .min(10, {
      message: "알맞은 휴대폰 번호 양식으로 제출해주세요",
    })
    .max(11),
});

export type FormSchema = z.infer<typeof formSchema>;

const Signup = () => {
  const mutationSignUp = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Requests> = async (data) => {
    mutationSignUp.mutate(data);
  };

  return (
    <Styled.Container>
      <Styled.SigninBox>
        <Styled.SigninMotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        >
          <Styled.SigninHeader>회원가입</Styled.SigninHeader>
          <Styled.SignForm onSubmit={handleSubmit(onSubmit)}>
            {InputProps.map((data, index: number) => {
              return (
                <InputText
                  key={index}
                  data={data}
                  register={register}
                  errors={errors}
                />
              );
            })}
            <Styled.SigninButton type="submit">회원가입</Styled.SigninButton>
          </Styled.SignForm>
          <Styled.SigninOutButton>로그인</Styled.SigninOutButton>
        </Styled.SigninMotionDiv>
      </Styled.SigninBox>
    </Styled.Container>
  );
};

export default Signup;
