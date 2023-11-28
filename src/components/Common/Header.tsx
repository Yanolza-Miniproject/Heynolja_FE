import * as Styled from "./Common.styles";
import Logo from "../../assets/svg/logo.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import CartIcon from "../../assets/svg/cart-icon.svg";
import UserIcon from "../../assets/svg/user-icon.svg";
import SignupIcon from "../../assets/svg/signup-icon.svg";
import { useState } from "react";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);
  const handleLogin = () => {
    setLoggedin((prev) => !prev);
  };

  return (
    <Styled.headerContainer>
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>{" "}
      <Styled.headerWrapper>
        <button onClick={handleLogin}>
          {loggedin ? "로그인 상태" : "로그인"}
        </button>
        {loggedin ? (
          <>
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
          </>
        ) : (
          <>
            <a href="search">
              <img src={SearchIcon} alt="search" />
            </a>
            <a href="signin">로그인</a> <a href="signup">회원가입</a>{" "}
          </>
        )}
      </Styled.headerWrapper>
    </Styled.headerContainer>
  );
};

export default Header;
