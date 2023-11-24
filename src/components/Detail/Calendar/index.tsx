import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Styled from "./Calendar.styles.ts";
import "./Calendar.css";
import { ko } from "date-fns/locale";
import { CalendarProps } from "./Calendar.types.ts";
import formatNumber from "../../../utils/formatNumber";
import { useRecoilState } from "recoil";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkInCheckOutAtom.ts";
import formatDate from "../../../utils/formatDate";

const Calendar: React.FC<CalendarProps> = ({ price }) => {
  const [checkInDate, setCheckInDate] = useRecoilState(checkInDateState);
  const [checkOutDate, setCheckOutDate] = useRecoilState(checkOutDateState);

  const handleChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);

    console.log("체크인 날짜:", formatDate(start));
    console.log("체크아웃 날짜:", formatDate(end));
  };

  return (
    <>
      <Styled.TextContainer>
        <Styled.SelectDatesText>날짜 선택</Styled.SelectDatesText>
        <Styled.PriceText>1박 가격 ￦ {formatNumber(price)}</Styled.PriceText>
      </Styled.TextContainer>
      <DatePicker
        selected={checkInDate}
        onChange={handleChange}
        startDate={checkInDate}
        endDate={checkOutDate}
        monthsShown={2}
        selectsRange
        inline
        minDate={new Date()}
        locale={ko}
        dateFormat="yyyy/MM/dd"
        isClearable={true}
        showPopperArrow={false}
      />
    </>
  );
};

export default Calendar;
