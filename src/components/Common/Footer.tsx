import * as Styled from "./Common.styles";

const Footer = () => {
  return (
    <>
      <Styled.footerContainer>
        <Styled.footerLeftWrapper>
          <h5>공지사항</h5>
          <ul>
            <li>🚀 공지사항 첫번째는 뭘까요?</li>
            <li>🚀 관리자페이지는 있을까요</li>
            <li>🚀 팀원 소개를 넣을까요</li>
          </ul>
        </Styled.footerLeftWrapper>
        <Styled.footerRightWrapper>
          <Styled.footerWrapper>
            <h5>프로젝트 소개</h5>
            <ul>
              <li>팀 소개</li>
              <li>무슨 사이트인가요?</li>
              <li>더 궁금하신가요?</li>
            </ul>
          </Styled.footerWrapper>
          <Styled.footerWrapper>
            <h5>마이페이지</h5>
            <ul>
              <li>개인정보 수정</li>
              <li>장바구니</li>
            </ul>
          </Styled.footerWrapper>
          <Styled.footerWrapper>
            <h5>Link</h5>
            <ul>
              <li>GitHub</li>
              <li>Notion</li>
            </ul>
          </Styled.footerWrapper>
        </Styled.footerRightWrapper>
      </Styled.footerContainer>
      <Styled.footerLine />
      <Styled.footerBottomWrapper>
        미니프로젝트 4조_ 아버지날보고있다면정답을알려조
      </Styled.footerBottomWrapper>
    </>
  );
};

export default Footer;
