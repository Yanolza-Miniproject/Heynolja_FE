import React from "react";
import * as Styled from "./DateSelector.styles.ts";
import formatDate from "../../../utils/formatDate.ts";
import calendarIcon from "../../../assets/svg/calendar-icon.svg";
import arrowDownIcon from "../../../assets/svg/arrow-down-icon.svg";
import { useRecoilValue } from "recoil";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkInCheckOutAtom.ts";

const DateSelector = React.forwardRef(({ onClick }, ref) => {
  const storedCheckInDate = useRecoilValue(checkInDateState);
  const storedCheckOutDate = useRecoilValue(checkOutDateState);

  const checkInDate = storedCheckInDate
    ? new Date(storedCheckInDate)
    : new Date();
  const checkOutDate = storedCheckOutDate
    ? new Date(storedCheckOutDate)
    : new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000);

  const formattedCheckInDate = formatDate(checkInDate).slice(5);
  const formattedCheckOutDate = formatDate(checkOutDate).slice(5);

  const dateRange = `${formattedCheckInDate}~${formattedCheckOutDate}`;

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
