export type CategoryProps = {
  id: string; // 숙소 id
  type: number; // 숙소 타입
  name: string; // 숙소 이름
  address: string; // 숙소 주소
  phone_number: string; // 숙소 전화번호
  thumbnailUrl: string; // 숙소 사진
  wishCount: number;
  viewCount: number;
  lowest_price: number;
  isWish: boolean;
  room_counts: number;
  checkIn: string;
  checkOut: string;
  categoryParking: number;
  categoryCooking: number;
  categoryPickup: number;
  infoDetail: string;
};

export type fetchCatgoryProps = {
  pageParam: number;
  regionUrl: string;
  typeUrl: string;
  categoryParkingUrl: string;
  categoryCookingUrl: string;
  categoryPickupUrl: string;
};
