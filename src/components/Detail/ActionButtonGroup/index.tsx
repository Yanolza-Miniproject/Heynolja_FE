import * as Styled from "./ActionButtonGroup.styles";
import { useSetRecoilState } from "recoil";
import { purchaseState } from "../../../store/purchaseAtom";
import { useNavigate } from "react-router-dom";

const ActionButtonGroup = ({ onAddToCart }) => {
  const setPurchase = useSetRecoilState(purchaseState);
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // 임시 order_id
    const orderId = Math.floor(Math.random() * 100000);

    setPurchase((prev) => ({
      ...prev,
      // totalPrice: roomDetail.price, //PriceDisplay에서 보내주고 있음.
      order_id: orderId,
    }));
    navigate("/payment");
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
