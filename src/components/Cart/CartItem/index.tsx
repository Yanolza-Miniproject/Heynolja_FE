import { ChangeEvent, useEffect, useState } from "react";
import exitLogo from "../../../assets/exit.svg";
import formatNumber from "../../../utils/formatNumber";
import Checkbox from "../Checkbox";
import * as Styled from "./CartItem.styles";
import { CartItemProps } from "./CartItem.type";
import { handeleDelete, handleCheck } from "./CartItems.utils";
import calculateNightCount from "../../../utils/calculateNightCount";

const CartItem = ({
  item,
  cart,
  allSelected,
  estimatedPrice,
  setSelected,
  setEstimatedPrice,
  setCart,
}: CartItemProps) => {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (allSelected) setCheck(true);
    else setCheck(false);
  }, [allSelected]);

  return (
    <Styled.Container check={check}>
      <Styled.itemTop>
        <Checkbox
          id={item.room_basket_id.toString()}
          checked={
            allSelected === true ? (check ? true : false) : check ? true : false
          }
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            handleCheck(
              event,
              setCheck,
              setSelected,
              item,
              setEstimatedPrice,
              estimatedPrice,
            );
          }}
        />
        <label htmlFor={item.room_basket_id.toString()}>
          {item.accommdation_name}
        </label>
        <Styled.Empty />
        <img
          src={exitLogo}
          alt="exit"
          style={{ cursor: "pointer", scale: "0.7" }}
          onClick={() => {
            handeleDelete(
              item,
              cart,
              estimatedPrice,
              setCart,
              setSelected,
              setEstimatedPrice,
            );
          }}
        />
      </Styled.itemTop>
      <Styled.itemBottom>
        <Styled.Image></Styled.Image>
        <Styled.Info>
          <p>{item.room_name}</p>
          <p>
            숙박일:{item.check_in_at} ~ {item.check_out_at} |{" "}
            {calculateNightCount(item.check_in_at, item.check_out_at)}박
          </p>
          <p>숙박인원:{item.number_guests}명</p>
          <p>{formatNumber(item.price)}원</p>
        </Styled.Info>
      </Styled.itemBottom>
    </Styled.Container>
  );
};

export default CartItem;
