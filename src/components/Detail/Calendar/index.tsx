import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Styled from "./Calendar.styles.ts";
import "./Calendar.css";
import { ko } from "date-fns/locale";
import { CalendarProps } from "./Calendar.types.ts";
import formatNumber from "../../../utils/formatNumber";
import { useSetRecoilState } from "recoil";
import { roomDetailState } from "../../../store/roomDetailAtom";

const Calendar: React.FC<CalendarProps> = ({ price }) => {
  const setRoomDetail = useSetRecoilState(roomDetailState);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // 날짜를 로컬시간대로 변환하고, yyyy-mm-dd 형식으로 변환.
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // 날짜 변경 핸들러
  const handleChange = (dates: Date[]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    console.log("체크인 날짜:", start);
    console.log("체크아웃 날짜:", end);

    // 리코일 상태 업데이트
    setRoomDetail((currentState) => ({
      ...currentState,
      roomDetail: {
        ...currentState.roomDetail,
        check_in_at: formatDate(start),
        check_out_at: formatDate(end),
      },
    }));
  };

  return (
    <>
      <Styled.TextContainer>
        <Styled.SelectDatesText>날짜 선택</Styled.SelectDatesText>
        <Styled.PriceText>1박 가격 ￦ {formatNumber(price)}</Styled.PriceText>
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
