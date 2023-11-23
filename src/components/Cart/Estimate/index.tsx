import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { purchaseState } from "../../../store/purchaseAtom";
import calculateTotalPrice from "../../../utils/calculateTotalPrice";
import formatNumber from "../../../utils/formatNumber";
import Button from "../../Common/Button";
import * as Styled from "./Estimate.styles";
import { EstimateProps } from "./Estimate.types";
const Estimate = ({ estimatedPrice }: EstimateProps) => {
  const navigate = useNavigate();
  const [, setPurchaseList] = useRecoilState(purchaseState);

  const [totalPrice, setTotalPrice] = useState(0);

  //  장바구니 선택된 객실 주문 임시 요청 함수
  const fetch = () => {
    axios
      .post("/api/v1/baskets/orders", {
        number_guests: 1,
        check_in_at: "2023-12-23",
        check_out_at: "2023-12-26",
      })
      .then((res) => {
        setPurchaseList({
          totalPrice: totalPrice,
          order_id: res.data.order_id,
        });
      });
  };

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
                <p>{item.accommdation_name}</p>
                <p>{item.room_name}</p>
              </div>
              <Styled.Empty />
              <span>{formatNumber(item.price)}원</span>
            </Styled.Item>
          );
        })}
      </Styled.Top>
      <Styled.Line />
      <Styled.Bottom>
        <span>총 합계</span>
        <Styled.Empty />
        <span>{formatNumber(totalPrice)}원</span>
      </Styled.Bottom>
      <Button
        text="구매하기"
        type="orange"
        size="lg"
        style={{ width: "100%" }}
        onClick={() => {
          if (estimatedPrice.length > 0) {
            fetch();
            navigate("/payment");
          } else alert("선택해주세요");
          // fetch1();
          // fetch3();
        }}
      />
    </Styled.Container>
  );
};

export default Estimate;
