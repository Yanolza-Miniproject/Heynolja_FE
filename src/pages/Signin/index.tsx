import * as Styled from "./Signin.styles";
import { LoginForm, SigninButton, SigninHeader } from "../Signup/Signup.styles";
import InputText from "../../components/Signin/InputText";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputProps } from "./Signin.constant";
import { SignInInputs } from "./Signin.types";
import axios from "axios";

const fetchSignin = async (data: SignInInputs) => {
  const response = await axios.post(
    "http://43.200.54.142:8080/api/v1/members/login",
    {
      email: data.email,
      password: data.password,
    },
  );

  console.log(response.headers);

  return response.data;
};

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>();

  const onSubmit: SubmitHandler<SignInInputs> = (data) => {
    fetchSignin(data).then((res) => {
      console.log(res);
    });

    console.log(data);
  };

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.MotionScaleDiv
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
        >
          <Styled.MotionOpacityDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          >
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
              <SigninHeader>로그인</SigninHeader>
              {InputProps.map((data, index) => (
                <InputText
                  key={index}
                  data={data}
                  register={register}
                  errors={errors}
                />
              ))}
              <SigninButton type="submit">로그인</SigninButton>
            </LoginForm>
          </Styled.MotionOpacityDiv>
        </Styled.MotionScaleDiv>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Signin;
