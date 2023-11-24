import * as Styled from "./ActionButtonGroup.styles";
import { useSetRecoilState } from "recoil";
import { purchaseState } from "../../../store/purchaseAtom";
import { useNavigate } from "react-router-dom";
import { usePostRoomToCart, usePostOrder } from "../../../hooks/useDetailFetch";

const ActionButtonGroup = ({ checkInAt, checkOutAt, numberGuests }) => {
  const setPurchase = useSetRecoilState(purchaseState);
  const navigate = useNavigate();
  const postRoomToCart = usePostRoomToCart();
  const postOrder = usePostOrder();

  //장바구니
  const onAddToCart = () => {
    postRoomToCart.mutate(
      {
        check_in_at: checkInAt,
        check_out_at: checkOutAt,
        number_guests: numberGuests,
      },
      {
        onSuccess: () => {
          console.log("장바구니 담기 성공");
          console.log("체크인 날짜:", checkInAt);
          console.log("체크아웃 날짜:", checkOutAt);
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

  //주문하기
  const handleBuyNow = () => {
    postOrder.mutate(
      {
        check_in_at: checkInAt,
        check_out_at: checkOutAt,
        number_guests: numberGuests,
      },
      {
        onSuccess: () => {
          // 임시 order_id 설정
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
