import { purchaseState, termsState } from "../../../store/purchaseAtom";
import * as Styled from "./Btn.styles";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import formatNumber from "../../../utils/formatNumber";
import { useDeleteOrder, usePayment } from "../../../hooks/usePayment";
import axios from "axios";
import { authInstance } from "../../../hooks/useAxios";

const Btn = () => {
  const navigate = useNavigate();
  const [isDisabeld, setIsDisabled] = useState(true);
  const termsAllChecked = useRecoilState(termsState);
  const [purchaseList] = useRecoilState(purchaseState);
  const orderId = purchaseList.order_id;
  const PaymentMutation = usePayment();
  const deleteOrderMutation = useDeleteOrder(orderId as number);

  // 결제 전송
  const paymentFetch = () => {
    const answer = confirm("결제하시겠습니까?");
    if (answer) {
      PaymentMutation.mutate(orderId as number, {
        onSuccess: async (data) => {
          console.log("결제 성공 데이터:", data);
          // navigate("/Complete/" + data.payment_id);
          sessionStorage.clear();
        },
      });
    }
  };

  // authInstance.post('/api/v1/orders/{order_id}/payments').then

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
