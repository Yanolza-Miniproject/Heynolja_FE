import Sidebar from "../../../components/Common/Sidebar";
import Header from "../../../components/MyPage/MyOrder/Header/index";
import ItemList from "../../../components/MyPage/MyOrder/MyOrderList/index";
import * as Styled from "./MyOrder.styles";

const index = () => {
  return (
    <Styled.MyOrderContainer>
      <Sidebar />
      <Header />
      <ItemList />
    </Styled.MyOrderContainer>
  );
};

export default index;
