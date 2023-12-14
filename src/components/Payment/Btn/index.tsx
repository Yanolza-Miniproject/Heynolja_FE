import { purchaseState, termsState } from "../../../store/purchaseAtom";
import * as Styled from "./Btn.styles";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import formatNumber from "../../../utils/formatNumber";
import { useDeleteOrder, usePayment } from "../../../hooks/usePayment";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Btn = () => {
  const navigate = useNavigate();
  const [isDisabeld, setIsDisabled] = useState(true);
  const termsAllChecked = useRecoilState(termsState);
  const [purchaseList] = useRecoilState(purchaseState);
  const orderId = purchaseList.order_id;
  const PaymentMutation = usePayment();
  const deleteOrderMutation = useDeleteOrder();

  // 결제 전송
  const paymentFetch = () => {
    Swal.fire({
      title: "결제 하시겠습니까?",
      padding: "50px",
      confirmButtonColor: "#FF5100",
      confirmButtonText: "결제하기",
      showDenyButton: true,
      denyButtonText: "취소하기",
      denyButtonColor: "#001650",
    }).then((result) => {
      if (result.isConfirmed) {
        PaymentMutation.mutate(orderId as number, {
          onSuccess: async (data) => {
            console.log("결제 성공 데이터:", data);
            navigate(`/Complete/${data.data.data}`);
          },
        });
      } else if (!result.isConfirmed) {
        return;
      }
    });
  };

  const deleteOrderfetch = () => {
    deleteOrderMutation.mutate(orderId as number);
  };

  const handleBackToCart = () => {
    deleteOrderfetch();
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
