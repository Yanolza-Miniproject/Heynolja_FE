export interface RoomItemProps {
  id: number;
  name: string;
  price: number;
  capacity: number;
  roomImageUrl?: string | undefined;
  RoomInventory?: { date: string; inventory: number }[];
  checkInDate: Date | null;
  checkOutDate: Date | null;
}
