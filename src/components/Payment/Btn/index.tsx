import { purchaseState, termsState } from "../../../store/purchaseAtom";
import * as Styled from "./Btn.styles";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import formatNumber from "../../../utils/formatNumber";
import { useDeleteOrder, usePayment } from "../../../hooks/usePayment";

const Btn = () => {
  const navigate = useNavigate();
  const [isDisabeld, setIsDisabled] = useState(true);
  const termsAllChecked = useRecoilState(termsState);
  const [purchaseList] = useRecoilState(purchaseState);
  const orderId = purchaseList.order_id;
  const PaymentMutation = usePayment(orderId as number);
  const deleteOrderMutation = useDeleteOrder(orderId as number);

  // 결제 전송
  const paymentFetch = () => {
    const answer = confirm("결제하시겠습니까?");
    if (answer) {
      PaymentMutation.mutate(
        { payment_type: "card" },
        {
          onSuccess: async (response) => {
            const data = response.data.data;
            await navigate("/Complete/" + data.payment_id);
            sessionStorage.clear();
          },
        },
      );
    }
  };

  const deleteOrderfetch = () => {
    deleteOrderMutation.mutate();
  };

  const handleBackToCart = () => {
    deleteOrderfetch();
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
