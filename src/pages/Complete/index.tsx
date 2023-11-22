import { useRecoilValue } from "recoil";
import CompleteMessage from "../../components/Complete/CompleteMessage";
import PaymentItems from "../../components/Complete/PaymentItems";
import { purchaseState } from "../../store/purchaseAtom";
import NotFound from "../NotFound";
import * as Styled from "./Complete.styles";

const Complete = () => {
  const item = useRecoilValue(purchaseState);

  if (item.data.length === 0) {
    return <NotFound />;
  }

  return (
    <Styled.Container>
      <CompleteMessage item={item} />
      <Styled.Line></Styled.Line>
      <PaymentItems />
    </Styled.Container>
  );
};

export default Complete;
