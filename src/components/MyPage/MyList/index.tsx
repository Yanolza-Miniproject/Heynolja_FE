import { Link } from "react-router-dom";
import Arrow from "../../../assets/arrow.svg";
import * as Styled from "./MyList.styles";

const index = () => {
  return (
    <Styled.MyList>
      <Link to="/mypage/myorder" style={{ textDecoration: "none" }}>
        <Styled.MyBox>
          <Styled.Content>
            <Styled.Title>💵 결제 내역</Styled.Title>
          </Styled.Content>
          <img src={Arrow}></img>
        </Styled.MyBox>
      </Link>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <Styled.MyBox>
          <Styled.Content>
            <Styled.Title>🛒 장바구니</Styled.Title>
          </Styled.Content>
          <img src={Arrow}></img>
        </Styled.MyBox>
      </Link>
      {/* <Link to="/wish"> */}
      <Styled.MyBox>
        <Styled.Content>
          <Styled.Title>❤️ 찜한 목록</Styled.Title>
        </Styled.Content>
        <img src={Arrow}></img>
      </Styled.MyBox>
      {/* </Link> */}
    </Styled.MyList>
  );
};

export default index;
