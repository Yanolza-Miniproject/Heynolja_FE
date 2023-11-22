import MyList from "../../components/MyPage/MyList/index";
import Header from "../../components/MyPage/Header/index";
import * as Styled from "./MyPage.styles";

const MyPage = () => {
  return (
    <Styled.Container>
      <Header />
      <MyList />
    </Styled.Container>
  );
};

export default MyPage;
