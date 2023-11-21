/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { css } from "@emotion/react";

function Layout() {
  return (
    <>
      <Header />
      <div css={outletStyle}>
        <Outlet />
      </div>
      <div css={outletStyle2}></div>
      <Footer />
    </>
  );
}

export default Layout;

const outletStyle = css`
  height: 700px;
  background-color: white;
`;

const outletStyle2 = {
  height: "700px",
  backgroundColor: "white",
};
