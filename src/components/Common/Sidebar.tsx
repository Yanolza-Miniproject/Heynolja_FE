import * as Styled from "../../components/Common/Common.styles";
import ScrollToTopIcon from "../../assets/svg/totop-icon.svg";

function Sidebar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Styled.SidebarContainer>
      <Styled.SidebarWrapper>
        <Styled.RecentlyViewedItem>방금 본 상품</Styled.RecentlyViewedItem>
        <Styled.NavButton onClick={scrollToTop}>
          <img src={ScrollToTopIcon} onClick={scrollToTop} />
          TOP
        </Styled.NavButton>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
}

export default Sidebar;
