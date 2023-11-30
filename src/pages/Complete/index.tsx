import { useParams } from "react-router-dom";
import CompleteMessage from "../../components/Complete/CompleteMessage";
import PaymentItems from "../../components/Complete/PaymentItems";
import { useGetCompleteData } from "../../hooks/useGetCompleteData";
import NotFound from "../NotFound";
import * as Styled from "./Complete.styles";

const Complete = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetCompleteData(id as string);

  if (data?.data.data.rooms === 0 || isError) {
    return (
      <Styled.Container>
        <NotFound />
      </Styled.Container>
    );
  }

  if (isLoading || !data) {
    return <div></div>;
  }

  return (
    <Styled.Container>
      {data && (
        <>
          <CompleteMessage data={data?.data.data.rooms} />
          <Styled.Line></Styled.Line>
          <PaymentItems data={data?.data.data.rooms} />
        </>
      )}
    </Styled.Container>
  );
};

export default Complete;
