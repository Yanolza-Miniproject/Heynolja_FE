import { Link } from "react-router-dom";
import * as Styled from "./Header.styles";

const index = () => {
  return (
    <Styled.Header>
      <span>결제내역</span>
      <Link to="/mypage" style={{ textDecoration: "none" }}>
        <Styled.BackToMyPageBtn>돌아가기</Styled.BackToMyPageBtn>
      </Link>
    </Styled.Header>
  );
};

export default index;
