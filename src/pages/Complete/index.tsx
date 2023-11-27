import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompleteMessage from "../../components/Complete/CompleteMessage";
import PaymentItems from "../../components/Complete/PaymentItems";
import { CartItemType } from "../../types";
import * as Styled from "./Complete.styles";

const Complete = () => {
  const { id } = useParams();
  const [data, setData] = useState<CartItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get(`/api/v1/payment/${id}`).then((res) => {
      setData([...res.data.data[0].rooms]);
      setTotalPrice(res.data.data[0].total_price);
    });
  }, []);

  return (
    <Styled.Container>
      <CompleteMessage data={data} totalPrice={totalPrice} />
      <Styled.Line></Styled.Line>
      <PaymentItems data={data} />
    </Styled.Container>
  );
};

export default Complete;
