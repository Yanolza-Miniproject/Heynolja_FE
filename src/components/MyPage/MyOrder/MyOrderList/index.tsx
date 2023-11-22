import MyOrderItem from "../MyOrderItem/index";
import * as Styled from "./MyOrderList.styles";

const index = () => {
  return (
    <Styled.MyOrderList>
      <MyOrderItem />
      <MyOrderItem />
      <MyOrderItem />
    </Styled.MyOrderList>
  );
};

export default index;
