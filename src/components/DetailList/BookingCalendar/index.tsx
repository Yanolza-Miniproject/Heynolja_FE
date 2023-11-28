import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import "./Calendar.css";
import { useRecoilState } from "recoil";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkinCheckOutAtom.ts";
import { useRef } from "react";
import DateSelector from "../DateSelector/index.tsx";

const Calendar = () => {
  const [checkInDate, setCheckInDate] = useRecoilState(checkInDateState);
  const [checkOutDate, setCheckOutDate] = useRecoilState(checkOutDateState);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const datePickerRef = useRef<any>(null);

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

  const handleDateSelectorClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
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
      customInput={<DateSelector onClick={handleDateSelectorClick} />}
      className="react-datepicker-second"
    />
  );
};

export default Calendar;
