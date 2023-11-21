import * as Styled from "./Common.styles";
import Logo from "../../assets/image/logo.png";
import SearchIcon from "../../assets/svg/search-icon.svg";
import CartIcon from "../../assets/svg/cart-icon.svg";
import UserIcon from "../../assets/svg/user-icon.svg";
import SignupIcon from "../../assets/svg/signup-icon.svg";

const Header = () => {
  return (
    <Styled.headerContainer>
      <a href="/">
        <img src={Logo} alt="logo" style={{ width: "8em", height: "1.5em" }} />
      </a>{" "}
      <Styled.headerWrapper>
        <a href="search">
          <img src={SearchIcon} alt="search" />
        </a>
        <a href="cart">
          <img src={CartIcon} alt="cart" />
        </a>{" "}
        <a href="mypage">
          <img src={UserIcon} alt="mypage" />
        </a>{" "}
        <a href="signup">
          <img src={SignupIcon} alt="logout" />
        </a>
      </Styled.headerWrapper>
    </Styled.headerContainer>
  );
};

export default Header;
