import { Link } from "react-router-dom";
import * as Styled from "./Common.styles";
import GithubIcon from "../../assets/svg/github-icon.svg";

const Footer = () => {
  return (
    <>
      <Styled.footerContainer>
        <div className="title">
          미니프로젝트 4조_ 아버지날보고있다면정답을알려조
        </div>
        <div></div>
        <div className="team">
          🚀 FE팀{" "}
          <Link to={"https://github.com/Yanolza-Miniproject/frontend"}>
            <img src={GithubIcon} alt="gitHub" />
          </Link>
        </div>
        <div className="team">
          🚀 BE팀{" "}
          <Link to={"https://github.com/Yanolza-Miniproject/backend"}>
            <img src={GithubIcon} alt="gitHub" />
          </Link>
        </div>
        <div className="teammate">
          이용훈 ・ 김미정 ・ 김민섭 ・ 이승연 ・ 박수연
        </div>
        <div className="teammate">권주환 ・ 김동민 ・ 이민균 ・ 박준모</div>
      </Styled.footerContainer>
    </>
  );
};

export default Footer;
