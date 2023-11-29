export interface RoomType {
  id: number;
  name: string;
  price: number;
  capacity: number;
  roomImageUrl?: string | undefined;
  RoomInventory?: { date: string; inventory: number }[];
  roomImages: { id: number; imageUrl: string }[];
}
