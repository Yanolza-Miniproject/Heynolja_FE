import { useNavigate } from "react-router-dom";
import Button from "../../Common/Button";
import * as Styled from "./CartZero.styles";

const CartZero = () => {
  const navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.P>텅</Styled.P>

        <Styled.DotWrap>
          <Styled.Dot1></Styled.Dot1>
          <Styled.Dot2></Styled.Dot2>
          <Styled.Dot3></Styled.Dot3>
        </Styled.DotWrap>
      </Styled.Wrapper>
      <Styled.Text>
        <p>장바구니에 담긴 상품이 없습니다</p>
        <p>원하는 상품을 담아보세요</p>
      </Styled.Text>
      <div>
        <Button
          text="홈으로 가기"
          type="blue"
          size="md"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </Styled.Container>
  );
};

export default CartZero;
