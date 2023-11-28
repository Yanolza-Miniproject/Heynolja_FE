import { Link } from "react-router-dom";
import * as Styled from "./Header.styles";
import { useGetMyOrder } from "../../../../hooks/usePayment";

const Header = () => {
  const { data } = useGetMyOrder(); // 결제 이력 데이터 요청
  return (
    <Styled.Header>
      {data?.data.data ? (
        <span>결제내역 {data?.data.data.length}</span>
      ) : (
        <div> </div>
      )}
      <Link to="/mypage" style={{ textDecoration: "none" }}>
        <Styled.BackToMyPageBtn>돌아가기</Styled.BackToMyPageBtn>
      </Link>
    </Styled.Header>
  );
};

export default Header;
