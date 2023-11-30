import * as Styled from "./Header.styles";
import { userDataAtom } from "../../../store/userDataAtom";
import { useRecoilState } from "recoil";

const Header = () => {
  const userData = useRecoilState(userDataAtom);
  return (
    <Styled.Header>
      <Styled.Profile>
        <Styled.UserName>{userData[0].nickName}</Styled.UserName>
        <span>님 안녕하세요!</span>
      </Styled.Profile>
    </Styled.Header>
  );
};

export default Header;
