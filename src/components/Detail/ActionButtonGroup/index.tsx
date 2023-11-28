import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { usePostOrder, usePostRoomToCart } from "../../../hooks/useDetailFetch";
import { purchaseState } from "../../../store/purchaseAtom";
import * as Styled from "./ActionButtonGroup.styles";
import { ActionButtonGroupProps } from "./ActionButtonGroup.types";
import { formatDate } from "../../../utils/formatDate";

const ActionButtonGroup = ({
  checkInAt,
  checkOutAt,
  numberGuests,
}: ActionButtonGroupProps) => {
  const setPurchase = useSetRecoilState(purchaseState);
  const navigate = useNavigate();
  const postRoomToCart = usePostRoomToCart();
  const postOrder = usePostOrder();

  const onAddToCart = () => {
    const formattedCheckInAt = formatDate(new Date(checkInAt));
    const formattedCheckOutAt = formatDate(new Date(checkOutAt));

    postRoomToCart.mutate(
      {
        checkInAt: formattedCheckInAt,
        checkOutAt: formattedCheckOutAt,
        numberOfGuests: numberGuests,
      },
      {
        onSuccess: () => {
          console.log("장바구니 담기 성공");
          console.log("체크인 날짜:", formattedCheckInAt);
          console.log("체크아웃 날짜:", formattedCheckOutAt);
          console.log("숙박 인원:", numberGuests);
          navigate("/cart");
        },
        onError: (error) => {
          console.error("장바구니 추가 실패:", error);
          alert("장바구니 추가에 실패했습니다.");
        },
      },
    );
  };

  const handleBuyNow = () => {
    const formattedCheckInAt = formatDate(new Date(checkInAt));
    const formattedCheckOutAt = formatDate(new Date(checkOutAt));

    postOrder.mutate(
      {
        checkInAt: formattedCheckInAt,
        checkOutAt: formattedCheckOutAt,
        numberOfGuests: numberGuests,
      },
      {
        onSuccess: () => {
          const orderId = Math.floor(Math.random() * 100000);
          setPurchase((prev) => ({
            ...prev,
            order_id: orderId,
          }));
          navigate("/payment");
        },
        onError: (error) => {
          console.error("주문 실패:", error);
          alert("주문 처리에 실패했습니다. 다시 시도해주세요.");
        },
      },
    );
  };

  return (
    <Styled.ButtonGroupContainer>
      <Styled.AddToCartButton onClick={onAddToCart}>
        장바구니 담기
      </Styled.AddToCartButton>
      <Styled.BuyNowButton onClick={handleBuyNow}>
        바로 구매하기
      </Styled.BuyNowButton>
    </Styled.ButtonGroupContainer>
  );
};

export default ActionButtonGroup;
