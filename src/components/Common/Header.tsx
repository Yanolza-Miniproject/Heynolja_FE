/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Header = () => {
  return (
    <div css={headerStyle}>
      <h3>
        <a css={linkStyle} href="/">
          Logo
        </a>
      </h3>
      <h5>
        <a css={linkStyle} href="cart">
          Cart
        </a>{" "}
        |{" "}
        <a css={linkStyle} href="signin">
          Login
        </a>{" "}
        |{" "}
        <a css={linkStyle} href="signup">
          Signup
        </a>
      </h5>
    </div>
  );
};

export default Header;

const headerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5em;
  background-color: #f6f6f6;
  border-bottom: 1px solid #f6f6f6;
  height: 50px;

  h5 {
    font-weight: 300;
  }
`;

const linkStyle = css`
  text-decoration: none;
  color: black;
  font-weight: 400;
  &:hover {
    text-decoration: none;
    color: #ff5100;
  }
`;
