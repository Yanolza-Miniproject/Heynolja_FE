import formatNumber from "../../../utils/formatNumber";
import * as Styled from "./CompleteMessage.styles";
import { CompleteMessageProps } from "./CompleteMessage.types";
import { leftDateUntilTheTrip } from "./CompleteMessage.utils";

const CompleteMessage = ({ data, totalPrice }: CompleteMessageProps) => {
  return (
    <Styled.Container>
      <Styled.TextWrapper>
        <Styled.TextTop>결제 완료🎉</Styled.TextTop>
        <Styled.TextMid>
          첫번째 여행까지{" "}
          <span data-testid="day">{leftDateUntilTheTrip(data)}일</span>{" "}
          남았습니다.
        </Styled.TextMid>
        <Styled.TextMid>
          <span>홍길동</span>님의 즐거운 여행을 응원합니다!
        </Styled.TextMid>
      </Styled.TextWrapper>
      <Styled.AmountWrapper>
        <span>총 결제 금액</span>
        <span>{formatNumber(totalPrice)}원</span>
      </Styled.AmountWrapper>
    </Styled.Container>
  );
};

export default CompleteMessage;
