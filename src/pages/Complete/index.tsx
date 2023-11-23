import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import CompleteMessage from "../../components/Complete/CompleteMessage";
import PaymentItems from "../../components/Complete/PaymentItems";
import { purchaseState } from "../../store/purchaseAtom";
import { CartItemType } from "../../types";
import * as Styled from "./Complete.styles";

const Complete = () => {
  const { totalPrice, order_id } = useRecoilValue(purchaseState);
  const [data, setData] = useState<CartItemType[]>([]);

  useEffect(() => {
    axios.get(`/api/v1/orders/${order_id}`).then((res) => {
      setData([...res.data.order_datas]);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Container>
      <CompleteMessage data={data} totalPrice={totalPrice} />
      <Styled.Line></Styled.Line>
      <PaymentItems />
    </Styled.Container>
  );
};

export default Complete;
