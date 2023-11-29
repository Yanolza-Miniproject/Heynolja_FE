import * as Styled from "./Common.styles";
import Logo from "../../assets/svg/logo.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import CartIcon from "../../assets/svg/cart-icon.svg";
import UserIcon from "../../assets/svg/user-icon.svg";
import SignupIcon from "../../assets/svg/signup-icon.svg";
import { useState } from "react";
// import { baseInstance } from "../../hooks/useAxios";
import axios from "axios";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);
  const handleLogin = () => {
    setLoggedin((prev) => !prev);
    fetch();
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://free-toad-alive.ngrok-free.app/api/v1/members/join",
        {
          email: "test@nam.com",
          password: "1234",
          nickname: "asd",
          phoneNumber: "01011111111",
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetch = async () => {
    try {
      const response = await axios.post(
        "https://free-toad-alive.ngrok-free.app/api/v1/members/login",
        {
          email: "test@nam.com",
          password: "1234",
        },
      );

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
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>{" "}
      <Styled.headerWrapper>
        <button onClick={handleLogin}>
          {loggedin ? "로그인 상태" : "로그인"}
        </button>
        <button onClick={fetchData}>회원가입 test</button>
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
