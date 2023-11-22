import * as Styled from "./ActionButtonGroup.styles";
import { useSetRecoilState } from "recoil";
import { roomDetailState } from "../../../store/roomDetailAtom";

const ActionButtonGroup = () => {
  const setRoomDetail = useSetRecoilState(roomDetailState);

  const onAddToCart = () => {
    setRoomDetail((currentState) => ({
      ...currentState,
    }));
    console.log("장바구니 클릭");
  };

  const onBuyNow = () => {
    setRoomDetail((currentState) => ({
      ...currentState,
    }));
    console.log("구매 클릭");
  };

  return (
    <Styled.ButtonGroupContainer>
      <Styled.AddToCartButton onClick={onAddToCart}>
        장바구니 담기
      </Styled.AddToCartButton>
      <Styled.BuyNowButton onClick={onBuyNow}>
        바로 구매하기
      </Styled.BuyNowButton>
    </Styled.ButtonGroupContainer>
  );
};

export default ActionButtonGroup;
