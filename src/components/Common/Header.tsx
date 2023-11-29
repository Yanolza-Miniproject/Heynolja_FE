import * as Styled from "./Common.styles";
import Logo from "../../assets/svg/logo.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import CartIcon from "../../assets/svg/cart-icon.svg";
import UserIcon from "../../assets/svg/user-icon.svg";
import SigninIcon from "../../assets/svg/signin-icon.svg";
import SignupIcon from "../../assets/svg/signup-icon.svg";
import LogoutIcon from "../../assets/svg/logout-icon.svg";
import { useState } from "react";
import { baseInstance } from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);
  const handleLogin = () => {
    setLoggedin((prev) => !prev);
    fetch();
  };

  const fetchData = async () => {
    try {
      const response = await baseInstance.post("/members/join", {
        email: "yh2@hey.com",
        password: "1234",
        nickname: "yh2",
        phoneNumber: "01011111111",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetch = async () => {
    try {
      const response = await baseInstance.post("/members/login", {
        email: "yh2@hey.com",
        password: "1234",
      });

      const accessToken = response.headers["access_token"];
      const refreshToken = response.headers["refresh_token"];

      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styled.headerContainer>
      <Styled.headerLeftWrapper>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Link to="/category">
          <span>숙소 둘러보기</span>
        </Link>
      </Styled.headerLeftWrapper>

      <Styled.headerRightWrapper>
        <button onClick={handleLogin}>
          {loggedin ? "로그인 상태" : "로그인"}
        </button>
        <button onClick={fetchData}>회원가입 test</button>
        {loggedin ? (
          <>
            <a href="/search">
              <img src={SearchIcon} alt="search" />
            </a>
            <a href="/cart">
              <img src={CartIcon} alt="cart" />
            </a>{" "}
            <a href="/mypage">
              <img src={UserIcon} alt="mypage" />
            </a>{" "}
            <a href="/logout">
              <img src={LogoutIcon} alt="logout" />
            </a>
          </>
        ) : (
          <>
            <a href="/search">
              <img src={SearchIcon} alt="search" />
            </a>
            <a href="signup">
              <img src={SignupIcon} alt="signup" />
            </a>{" "}
            <a href="signin">
              <img src={SigninIcon} alt="signin" />
            </a>{" "}
          </>
        )}
      </Styled.headerRightWrapper>
    </Styled.headerContainer>
  );
};

export default Header;
