import { purchaseState, termsState } from "../../../store/purchaseAtom";
import * as Styled from "./Btn.styles";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import formatNumber from "../../../utils/formatNumber";
import { usePayment } from "../../../hooks/usePayment";
import { paymentCompletedAtom } from "../../../store/paymentCompletedAtom";

const Btn = () => {
  const navigate = useNavigate();
  const [isDisabeld, setIsDisabled] = useState(true);
  const termsAllChecked = useRecoilState(termsState);
  const [purchaseList] = useRecoilState(purchaseState);
  const [paymentCompleted, SetPaymentCompleted] =
    useRecoilState(paymentCompletedAtom);
  const orderId = purchaseList.order_id;
  const PaymentMutation = usePayment(orderId as number);

  const moveToComplete = () => {
    console.log(paymentCompleted);
    sessionStorage.clear();
    navigate("/Complete");
  };

  // 결제 전송
  const paymentFetch = () => {
    const answer = confirm("결제하시겠습니까?");
    if (answer) {
      PaymentMutation.mutate(
        { payment_type: "card" },
        {
          onSuccess: async (response) => {
            console.log(response);
            const data = response.data.data;
            console.log("w", data.payment_id);
            // 리코일 저장
            SetPaymentCompleted({
              payment_at: data.payment_at,
              payment_id: data.payment_id,
              payment_status: data.payment_status,
              payment_type: "card",
              total_price: data.total_price,
              order_datas: data.order_data,
            });
            await moveToComplete();
          },
        },
      );
    }
  };

  const handleBackToCart = () => {
    history.back();
  };

  const handleGoToPay = () => {
    paymentFetch();
  };

  useEffect(() => {
    if (termsAllChecked[0] === true) {
      setIsDisabled(false);
    } else setIsDisabled(true);
  }, [termsAllChecked]);

  return (
    <Styled.BtnWrapper>
      <Styled.GoToPay disabled={isDisabeld} onClick={handleGoToPay}>
        <Styled.ItemPriceWrapper>
          <span>₩</span>
          <Styled.ItemPrice>
            {" "}
            {formatNumber(purchaseList.totalPrice)}
          </Styled.ItemPrice>
        </Styled.ItemPriceWrapper>
        결제하기
      </Styled.GoToPay>
      <Styled.BackToCart onClick={handleBackToCart}>
        장바구니로 돌아가기
      </Styled.BackToCart>
    </Styled.BtnWrapper>
  );
};

export default Btn;
