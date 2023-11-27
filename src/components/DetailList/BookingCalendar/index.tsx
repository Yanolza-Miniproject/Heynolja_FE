import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import * as Styled from "./BookingCalendar.styles.ts";
import "./Calendar.css";
import { ko } from "date-fns/locale";
// import { CalendarProps } from "./Calendar.types.ts";
// import formatNumber from "../../../utils/formatNumber";
import { useRecoilState } from "recoil";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkInCheckOutAtom.ts";
// import formatDate from "../../../utils/formatDate";
import DateSelector from "../DateSelector/index.tsx";

const Calendar = () => {
  const [checkInDate, setCheckInDate] = useRecoilState(checkInDateState);
  const [checkOutDate, setCheckOutDate] = useRecoilState(checkOutDateState);

  const isValidDate = (date: Date | null) => {
    return date instanceof Date && !isNaN(date.getTime());
  };

  const validCheckInDate = isValidDate(checkInDate) ? checkInDate : null;
  const validCheckOutDate = isValidDate(checkOutDate) ? checkOutDate : null;

  const handleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  return (
    <DatePicker
      selected={validCheckInDate}
      onChange={handleChange}
      startDate={validCheckInDate}
      endDate={validCheckOutDate}
      monthsShown={2}
      selectsRange
      inline={false}
      minDate={new Date()}
      locale={ko}
      dateFormat="yyyy/MM/dd"
      isClearable={true}
      customInput={<DateSelector />}
      className="react-datepicker-second"
    />
  );
};

export default Calendar;
