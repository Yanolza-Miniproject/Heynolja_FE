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
import calculateNightCount from "../../../utils/calculateNightCount";

const Estimate = ({ estimatedPrice }: EstimateProps) => {
  const postOrdersMutation = usePostOrders();
  const navigate = useNavigate();
  const [, setPurchaseList] = useRecoilState(purchaseState);
  const [totalPrice, setTotalPrice] = useState(0);
  const [purchaseId, setPurchaseId] = useState<number[]>([
    ...estimatedPrice.map((item) => item.id),
  ]);

  useEffect(() => {
    setPurchaseId([...estimatedPrice.map((item) => item.id)]);
  }, [estimatedPrice]);

  // 장바구니에서 체크한 상품 주문 요청 함수
  const fetch = () => {
    postOrdersMutation.mutate(
      { ids: [...purchaseId] },
      {
        onSuccess: (responseData) => {
          setPurchaseList({
            totalPrice: totalPrice,
            order_id: responseData.data.data,
          });
          navigate("/payment");
        },
      },
    );
  };

  // 총 함계 가격 계산
  useEffect(() => {
    const newPrice = estimatedPrice.map((item) => {
      return {
        ...item,
        price:
          item.price * calculateNightCount(item.checkInAt, item.checkOutAt),
      };
    });
    setTotalPrice(calculateTotalPrice(newPrice));
  }, [estimatedPrice]);

  return (
    <Styled.Container>
      <Styled.Top>
        {estimatedPrice.map((item) => {
          return (
            <Styled.Item key={item.id} data-testid="estimate-item">
              <div>
                <p>{item.accommodationName}</p>
                <p>{item.roomName}</p>
              </div>
              <Styled.Empty />
              <span>
                ₩
                {formatNumber(
                  item.price *
                    calculateNightCount(item.checkInAt, item.checkOutAt),
                )}
              </span>
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
