import { useParams } from "react-router-dom";
import CompleteMessage from "../../components/Complete/CompleteMessage";
import PaymentItems from "../../components/Complete/PaymentItems";
import { useGetCompleteData } from "../../hooks/useGetCompleteData";
import NotFound from "../NotFound";
import * as Styled from "./Complete.styles";

const Complete = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetCompleteData(id as string);

  if (data?.data.data.length === 0 || isError) {
    return (
      <Styled.Container>
        <NotFound />
      </Styled.Container>
    );
  }

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <Styled.Container>
      <CompleteMessage
        data={data?.data.data[0].rooms}
        totalPrice={data?.data.data[0].total_price}
      />
      <Styled.Line></Styled.Line>
      <PaymentItems data={data?.data.data[0].rooms} />
    </Styled.Container>
  );
};

export default Complete;
