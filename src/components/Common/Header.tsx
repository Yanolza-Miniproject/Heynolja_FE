import * as Styled from "./Common.styles";
import Logo from "../../assets/svg/logo.svg";
import SearchIcon from "../../assets/svg/search-icon.svg";
import CartIcon from "../../assets/svg/cart-icon.svg";
import UserIcon from "../../assets/svg/user-icon.svg";
import SigninIcon from "../../assets/svg/signin-icon.svg";
import SignupIcon from "../../assets/svg/signup-icon.svg";
import LogoutIcon from "../../assets/svg/logout-icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";

const Header = () => {
  const [loggedin, setLoggedin] = useState(false);
  const handleLogin = () => {
    setLoggedin((prev) => !prev);
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
        {loggedin ? (
          <>
            <Link to="/search">
              <Tooltip title="숙소 찾기" arrow>
                <img src={SearchIcon} alt="search" />
              </Tooltip>
            </Link>
            <Link to="/cart">
              <Tooltip title="내 카트" arrow>
                <img src={CartIcon} alt="cart" />
              </Tooltip>
            </Link>{" "}
            <Link to="/mypage">
              <Tooltip title="마이페이지" arrow>
                <img src={UserIcon} alt="mypage" />
              </Tooltip>
            </Link>{" "}
            <Link to="/logout">
              <Tooltip title="로그아웃" arrow>
                <img src={LogoutIcon} alt="logout" />
              </Tooltip>
            </Link>
          </>
        ) : (
          <>
            <Link to="/search">
              <Tooltip title="숙소 찾기" arrow>
                <img src={SearchIcon} alt="search" />
              </Tooltip>
            </Link>
            <Link to="signup">
              <Tooltip title="회원가입" arrow>
                <img src={SignupIcon} alt="signup" />
              </Tooltip>
            </Link>{" "}
            <Link to="signin">
              <Tooltip title="로그인" arrow>
                <img src={SigninIcon} alt="signin" />
              </Tooltip>
            </Link>{" "}
          </>
        )}
      </Styled.headerRightWrapper>
    </Styled.headerContainer>
  );
};

export default Header;
