import React from "react";
import * as Styled from "./DateSelector.styles.ts";
import formatDate from "../../../utils/formatDate.ts";
import calendarIcon from "../../../assets/svg/calendar-icon.svg";
import arrowDownIcon from "../../../assets/svg/arrow-down-icon.svg";

const DateSelector = React.forwardRef(({ onClick }, ref) => {
  const today = new Date();
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

  const formattedToday = formatDate(today).slice(5);
  const formattedTomorrow = formatDate(tomorrow).slice(5);

  const dateRange = `${formattedToday}~${formattedTomorrow}`;

  return (
    <Styled.Container>
      <Styled.DateButton
        onClick={onClick}
        ref={ref}
        className="custom-date-input"
      >
        <Styled.CalendarIconImage src={calendarIcon} alt="calendar 아이콘" />
        {dateRange || "날짜 선택"}
        <Styled.ArrowIconImage src={arrowDownIcon} alt="화살표 아이콘" />
      </Styled.DateButton>
    </Styled.Container>
  );
});

export default DateSelector;
