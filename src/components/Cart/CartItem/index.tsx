import { useEffect, useState } from "react";
import exitLogo from "../../../assets/exit.svg";
import { authInstance } from "../../../hooks/useAxios";
import calculateNightCount from "../../../utils/calculateNightCount";
import formatNumber from "../../../utils/formatNumber";
import Checkbox from "../Checkbox";
import * as Styled from "./CartItem.styles";
import { CartItemProps } from "./CartItem.type";
import { handeleDelete, handleCheck } from "./CartItems.utils";

const CartItem = ({
  item, // 해당 아이템에 대한 정보
  cart, // api 받은 카트 데이터
  select, // 체크 상태에 대한 불리언 배열
  setSelect,
  index, // 해당 아이템이 속한 배열의 index값
  estimatedPrice, // 예상 구매 내역 리스트
  setSelected,
  setEstimatedPrice,
  setCart,
}: CartItemProps) => {
  const [check, setCheck] = useState(select[index]); // 디자인을 위한 체크 상태 여부

  // 장바구니에서 해당 상품 제거
  const fetch = () => {
    authInstance
      .put("/baskets", {
        ids: [item.id],
      })
      .then((res) => {
        console.log(res.data);
        handeleDelete(
          item,
          cart,
          estimatedPrice,
          index,
          select,
          setSelect,
          setCart,
          setSelected,
          setEstimatedPrice,
        );
      });
  };

  // 해당 아이템이 체크 여부 지속적인 확인
  useEffect(() => {
    setCheck(select[index]);
  }, [select, index]);

  return (
    <Styled.Container check={check}>
      <Styled.itemTop>
        <Checkbox
          id={item.id.toString()}
          checked={select.length > 0 ? select[index] : false}
          onChange={(event) => {
            handleCheck(
              event,
              setCheck,
              setSelected,
              item,
              setEstimatedPrice,
              estimatedPrice,
              index,
              setSelect,
              select,
            );
          }}
        />
        <label htmlFor={item.id.toString()}>{item.accommodationName}</label>
        <Styled.Empty />
        <img
          src={exitLogo}
          alt="exit"
          style={{ cursor: "pointer", scale: "0.7" }}
          onClick={fetch}
        />
      </Styled.itemTop>
      <Styled.itemBottom>
        <Styled.Image></Styled.Image>
        <Styled.Info>
          <p>
            <span>방 타입</span>: {item.roomName}
          </p>
          <p>
            <span>숙박일</span>: {item.checkInAt} ~ {item.checkOutAt} |{" "}
            {calculateNightCount(item.checkInAt, item.checkOutAt)}박
          </p>
          <p>
            <span>숙박인원</span>: {item.numberOfGuests}명
          </p>
          <p>₩{formatNumber(item.price)}</p>
        </Styled.Info>
      </Styled.itemBottom>
    </Styled.Container>
  );
};

export default CartItem;
