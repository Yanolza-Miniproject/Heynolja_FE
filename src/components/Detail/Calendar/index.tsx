import { ko } from "date-fns/locale";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRecoilState } from "recoil";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkinCheckOutAtom.ts";
import formatNumber from "../../../utils/formatNumber";
import "./Calendar.css";
import * as Styled from "./Calendar.styles.ts";
import { CalendarProps } from "./Calendar.types.ts";

const Calendar: React.FC<CalendarProps> = ({ price, onDateChange }) => {
  const [checkInDate, setCheckInDate] = useRecoilState(checkInDateState);
  const [checkOutDate, setCheckOutDate] = useRecoilState(checkOutDateState);

  const isValidDate = (date: Date | null) => {
    return date instanceof Date && !isNaN(date.getTime());
  };

  const validCheckInDate = isValidDate(checkInDate) ? checkInDate : null;
  const validCheckOutDate = isValidDate(checkOutDate) ? checkOutDate : null;

  const handleChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);

    onDateChange(start, end);

    // console.log("체크인 날짜:", formatDate(start));
    // console.log("체크아웃 날짜:", formatDate(end));
  };

  return (
    <>
      <Styled.TextContainer>
        <Styled.SelectDatesText>날짜 선택</Styled.SelectDatesText>
        <Styled.PriceText>1박 가격 ￦ {formatNumber(price)}</Styled.PriceText>
      </Styled.TextContainer>
      <DatePicker
        selected={validCheckInDate}
        onChange={handleChange}
        startDate={validCheckInDate}
        endDate={validCheckOutDate}
        monthsShown={2}
        selectsRange
        inline
        minDate={new Date()}
        locale={ko}
        dateFormat="yyyy/MM/dd"
        isClearable={true}
        showPopperArrow={false}
        className="react-datepicker-first"
      />
    </>
  );
};

export default Calendar;
