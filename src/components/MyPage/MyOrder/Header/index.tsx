import { Link } from "react-router-dom";
import * as Styled from "./Header.styles";
import { bookedList } from "../../../../mock/myPageData";

const index = () => {
  return (
    <Styled.Header>
      <span>결제내역 {bookedList.length}</span>
      <Link to="/mypage" style={{ textDecoration: "none" }}>
        <Styled.BackToMyPageBtn>돌아가기</Styled.BackToMyPageBtn>
      </Link>
    </Styled.Header>
  );
};

export default index;
