import * as Styled from "./ActionButtonGroup.styles";
import { useRecoilValue } from "recoil";
import { roomDetailState } from "../../../store/roomDetailAtom";
// import { purchaseState } from "../../../store/purchaseAtom";

const ActionButtonGroup = () => {
  const roomDetail = useRecoilValue(roomDetailState);
  // const setPurchase = useSetRecoilState(purchaseState);

  const onAddToCart = () => {
    // setRoomDetail((currentState) => ({
    //   ...currentState,
    // }));
    console.log("장바구니 클릭");
  };

  // function generateUniqueID() {
  //   return Date.now();
  // }

  const onBuyNow = () => {
    // setPurchase((currentPurchase) => {
    //   const newItem: CartItemType = {
    //     room_basket_id: generateUniqueID(), // 임시로 고유 id 생성함. 장바구니에 안넣었는데 있어야하나?
    //     accommdation_name: roomDetail.accommodation_name,
    //     room_image_url: roomDetail.room_image_url,
    //     room_name: roomDetail.room_name,
    //     price: roomDetail.price,
    //     number_guests: roomDetail.number_guests,
    //     check_in_at: roomDetail.check_in_at,
    //     check_out_at: roomDetail.check_out_at,
    //   };

    //   return {
    //     totalPrice: roomDetail.price,
    //     data: [...currentPurchase.data, newItem],
    //   };
    // });
    console.log("Purchase initiated with:", roomDetail);
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
