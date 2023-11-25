import React from "react";
import Header from "../../../components/MyPage/MyOrder/Header/index";
import ItemList from "../../../components/MyPage/MyOrder/MyOrderList/index";
import * as Styled from "./MyOrder.styles";

const index = () => {
  return (
    <Styled.MyOrderContainer>
      <Header />
      <ItemList />
    </Styled.MyOrderContainer>
  );
};

export default index;
