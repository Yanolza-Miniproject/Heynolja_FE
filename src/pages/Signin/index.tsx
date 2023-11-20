import * as Styled from "./Signin.styles";

const Signin = () => {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.MotionScaleDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        >
          안녕
        </Styled.MotionScaleDiv>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

export default Signin;
