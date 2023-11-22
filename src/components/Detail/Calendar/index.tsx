import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Styled from "./Calendar.styles.ts";
import "./Calendar.css";
import { ko } from "date-fns/locale";
import { CalendarProps } from "./Calendar.types.ts";

const Calendar: React.FC<CalendarProps> = ({ price }) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  // 날짜 변경 핸들러
  const handleChange = (dates: Date[]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <Styled.TextContainer>
        <Styled.SelectDatesText>날짜 선택</Styled.SelectDatesText>
        <Styled.PriceText>1박 가격 ￦ {price}</Styled.PriceText>
      </Styled.TextContainer>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
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
