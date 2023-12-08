import InputText from "../../components/Signin/InputText";
import * as Styled from "./Signup.styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { Requests } from "./Signup.types";
import { InputProps } from "./Signup.constant";
import { useSignUp } from "../../api/Auth/query";

const Signup = () => {
  const mutationSignUp = useSignUp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Requests>();

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
