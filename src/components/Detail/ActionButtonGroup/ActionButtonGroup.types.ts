export interface ActionButtonGroupProps {
  onAddToCart: () => void;
  onBuyNow: () => void;
  checkInAt: string;
  checkOutAt: string;
  numberGuests: number;
  roomDetail: {
    id: number;
    accommodation_name: string;
    room_name: string;
    price: number;
    stock: number;
    room_image_url: string[];
  };
}
