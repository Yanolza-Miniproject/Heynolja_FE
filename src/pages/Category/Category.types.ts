export type CategoryProps = {
  id: string; // 숙소 id
  type: number; // 숙소 타입
  name: string; // 숙소 이름
  address: string; // 숙소 주소
  phone_number: string; // 숙소 전화번호
  thumbnail_url: string; // 숙소 사진
  like_count: number;
  view_count: number;
  price: number;
  likes_available: boolean;
  room_counts: number;
  check_in: string;
  check_out: string;
  categoryParking: number;
  categoryCooking: number;
  categoryPickup: number;
};

export type fetchCatgoryProps = {
  pageParam: number;
  regionUrl: string;
  typeUrl: string;
  categoryParkingUrl: string;
  categoryCookingUrl: string;
  categoryPickupUrl: string;
};
