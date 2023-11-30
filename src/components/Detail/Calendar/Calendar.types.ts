export interface CalendarProps {
  price: number;
  onDateChange: (checkInDate: Date | null, checkOutDate: Date | null) => void;
}
