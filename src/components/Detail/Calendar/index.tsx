import { ko } from "date-fns/locale";
import React, { useCallback, useEffect } from "react";
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
    return date instanceof Date && !Number.isNaN(date.getTime());
  };

  const validCheckInDate = isValidDate(checkInDate) ? checkInDate : undefined;
  const validCheckOutDate = isValidDate(checkOutDate)
    ? checkOutDate
    : undefined;

  const handleChange = useCallback(
    (dates: [Date | null, Date | null]) => {
      const [start, end] = dates;
      setCheckInDate(start);
      setCheckOutDate(end);

      if (onDateChange) {
        onDateChange(start, end);
      }
    },
    [setCheckInDate, setCheckOutDate, onDateChange],
  );

  useEffect(() => {
    handleChange([checkInDate, checkOutDate]);
  }, [checkInDate, checkOutDate, handleChange]);

  return (
    <>
      <Styled.TextContainer>
        <Styled.SelectDatesText>날짜 선택</Styled.SelectDatesText>
        <Styled.PriceText>
          1박 가격 ￦ {price !== undefined ? formatNumber(price) : "정보 없음"}
        </Styled.PriceText>
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
