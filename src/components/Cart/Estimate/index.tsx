import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { purchaseState } from "../../../store/purchaseAtom";
import calculateTotalPrice from "../../../utils/calculateTotalPrice";
import formatNumber from "../../../utils/formatNumber";
import * as Styled from "./Estimate.styles";
import { EstimateProps } from "./Estimate.types";
import { handleBuyClick } from "./Estimate.utils";

const Estimate = ({ estimatedPrice }: EstimateProps) => {
  const navigate = useNavigate();
  const [, setPurchaseList] = useRecoilState(purchaseState);

  const [totalPrice, setTotalPrice] = useState(0);

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
      <Styled.Button
        onClick={() => {
          handleBuyClick(estimatedPrice, setPurchaseList);
          if (estimatedPrice.length > 0) navigate("/payment");
          else alert("선택해주세요");
        }}
      >
        구매하기
      </Styled.Button>
    </Styled.Container>
  );
};

export default Estimate;
