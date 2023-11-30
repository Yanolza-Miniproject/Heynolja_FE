export interface RoomDetails {
  data: {
    name: string;
    accommodationName: string;
    price: number;
    inventory: number;
    roomImages: { id: number; imageUrl: string }[];
  };
}
