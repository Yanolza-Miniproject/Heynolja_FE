import * as Styled from "./Header.styles";

const index = () => {
  return (
    <Styled.Header>
      <Styled.Profile>
        <Styled.UserName>test1234</Styled.UserName>
        <span>님 안녕하세요!</span>
      </Styled.Profile>
      <Styled.LeaveBtn>탈퇴하기</Styled.LeaveBtn>
    </Styled.Header>
  );
};

export default index;
