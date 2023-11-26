import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import * as Styled from "./BookingCalendar.styles.ts";
import "../../Detail/Calendar/Calendar.css";
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

  const handleChange = (dates) => {
    const [start, end] = dates;
    setCheckInDate(start);
    setCheckOutDate(end);
  };

  return (
    <div className="calendar-container">
      <DatePicker
        selected={checkInDate}
        onChange={handleChange}
        startDate={checkInDate}
        endDate={checkOutDate}
        monthsShown={2}
        selectsRange
        inline={false}
        locale={ko}
        dateFormat="yyyy/MM/dd"
        isClearable={true}
        customInput={<DateSelector />}
      />
    </div>
  );
};

export default Calendar;
