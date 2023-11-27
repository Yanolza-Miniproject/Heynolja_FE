export interface ActionButtonGroupProps {
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
  onAddToCart: () => void;
  handleBuyNow: () => void;
}
