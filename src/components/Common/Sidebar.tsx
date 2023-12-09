import * as Styled from "../../components/Common/Common.styles";
import ScrollToTopIcon from "../../assets/svg/totop-icon.svg";
import { windowScrollToPolyfill } from "seamless-scroll-polyfill/src/scroll.polyfill";

function Sidebar() {
  windowScrollToPolyfill();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Styled.SidebarContainer>
      <Styled.SidebarWrapper>
        <Styled.NavButton onClick={scrollToTop}>
          <img src={ScrollToTopIcon} alt="to-top" />
          TOP
        </Styled.NavButton>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
}

export default Sidebar;
