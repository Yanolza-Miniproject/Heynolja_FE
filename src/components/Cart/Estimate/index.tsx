import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { usePostOrders } from "../../../hooks/useCartFetch";
import { purchaseState } from "../../../store/purchaseAtom";
import calculateTotalPrice from "../../../utils/calculateTotalPrice";
import formatNumber from "../../../utils/formatNumber";
import Button from "../../Common/Button";
import * as Styled from "./Estimate.styles";
import { EstimateProps } from "./Estimate.types";

const Estimate = ({ estimatedPrice }: EstimateProps) => {
  const postOrdersMutation = usePostOrders();
  const navigate = useNavigate();
  const [, setPurchaseList] = useRecoilState(purchaseState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchaseId, setPurchaseId] = useState<number[]>([
    ...estimatedPrice.map((item) => item.room_basket_id),
  ]);

  useEffect(() => {
    setPurchaseId([...estimatedPrice.map((item) => item.room_basket_id)]);
  }, [estimatedPrice]);

  // 장바구니에서 체크한 상품 주문 요청 함수
  const fetch = () => {
    postOrdersMutation.mutate(
      { room_basket_id: [...purchaseId] },
      {
        onSuccess: (responseData) => {
          setPurchaseList({
            totalPrice: totalPrice,
            order_id: responseData.data.data,
            data: [
              {
                room_basket_id: 4,
                accommodation_name: "제주 라마다 호텔",
                room_name: "스위트룸",
                check_in_at: "11-11-11",
                check_out_at: "11-11-11",
                number_guests: 3,
                price: 1233,
              },
            ],
          });
          navigate("/payment");
        },
      },
    );
  };

  // 총 함계 가격 계산
  useEffect(() => {
    setTotalPrice(calculateTotalPrice(estimatedPrice));
  }, [estimatedPrice]);

  return (
    <Styled.Container>
      <Styled.Top>
        {estimatedPrice.map((item) => {
          return (
            <Styled.Item key={item.room_basket_id}>
              <div>
                <p>{item.accommodation_name}</p>
                <p>{item.room_name}</p>
              </div>
              <Styled.Empty />
              <span>₩{formatNumber(item.price)}</span>
            </Styled.Item>
          );
        })}
      </Styled.Top>
      <Styled.Line />
      <Styled.Bottom>
        <span>총 합계</span>
        <Styled.Empty />
        <span>₩{formatNumber(totalPrice)}</span>
      </Styled.Bottom>
      <Button
        text="구매하기"
        type="orange"
        size="lg"
        style={{ width: "100%" }}
        onClick={() => {
          if (estimatedPrice.length > 0) {
            fetch();
          } else alert("선택해주세요");
        }}
      />
    </Styled.Container>
  );
};

export default Estimate;
