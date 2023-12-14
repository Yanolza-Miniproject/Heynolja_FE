export type CategoryProps = {
  id: string; // 숙소 id
  type: number; // 숙소 타입
  name: string; // 숙소 이름
  address: string; // 숙소 주소
  phoneNumber: string; // 숙소 전화번호
  thumbnailUrl: string; // 숙소 사진
  wishCount: number;
  viewCount: number;
  lowest_price: number;
  isWish: boolean;
  checkIn: string;
  checkOut: string;
  categoryParking: number;
  categoryCooking: number;
  categoryPickup: number;
  infoDetail: string;
};

export type myWishDataProps = {
  accommodation: myWishProps;
};

export type myWishProps = Omit<CategoryProps, "lowest_price" | "isWish">;

// export enum RegionEnum {
//   Region0 = 0,
//   Region1 = 1,
//   Region2 = 2,
//   Region3 = 3,
//   Region4 = 4,
//   Region5 = 5,
//   Region6 = 6,
//   Region7 = 7,
//   Region8 = 8,
//   Region9 = 9,
// }

// export enum TypeEnum {
//   Type0 = 0,
//   Type1 = 1,
//   Type2 = 2,
//   Type3 = 3,
//   Type4 = 4,
//   Type5 = 5,
//   Type6 = 6,
// }

export type fetchCatgoryProps = {
  pageParam: number;
  region01: number | boolean;
  type: number | boolean;
  categoryParking: number | boolean;
  categoryCooking: number | boolean;
  categoryPickup: number | boolean;
};

export type CategoryFilterParams = Omit<fetchCatgoryProps, "pageParam">;
