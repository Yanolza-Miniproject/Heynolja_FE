import * as Styled from "./Common.styles";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <Styled.outletStyle>
        <Outlet />
      </Styled.outletStyle>
      <Footer />
    </>
  );
}

export default Layout;
