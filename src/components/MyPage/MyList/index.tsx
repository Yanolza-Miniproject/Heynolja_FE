import Arrow from "../../../assets/arrow.svg";
import * as Styled from "./MyList.styles";

const index = () => {
  return (
    <Styled.MyList>
      <Styled.MyBox>
        <Styled.Content>
          <Styled.Title>💵 결제 내역</Styled.Title>
          <Styled.Count>3</Styled.Count>
        </Styled.Content>
        <img src={Arrow}></img>
      </Styled.MyBox>
      <Styled.MyBox>
        <Styled.Content>
          <Styled.Title>🛒 장바구니</Styled.Title>
          <Styled.Count>3</Styled.Count>
        </Styled.Content>
        <img src={Arrow}></img>
      </Styled.MyBox>
      <Styled.MyBox>
        <Styled.Content>
          <Styled.Title>❤️ 결제 내역</Styled.Title>
          <Styled.Count>3</Styled.Count>
        </Styled.Content>
        <img src={Arrow}></img>
      </Styled.MyBox>
    </Styled.MyList>
  );
};

export default index;
