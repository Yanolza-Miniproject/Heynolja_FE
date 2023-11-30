import { ReactNode } from "react";

export type AccommodationListProps = {
  accommodations?: AccommodationData[];
  title: ReactNode;
  isRandomAccomData?: boolean;
};

export type AccommodationData = {
  id: number;
  name: string;
  type?: number;
  address?: string;
  phoneNumber?: string;
  homepage?: string;
  infoDetail?: string;
  thumbnailUrl: string;
  categoryParking: boolean;
  categoryCooking: boolean;
  categoryPickup: boolean;
  categoryAmenities?: string;
  categoryDiningArea?: string;
  checkIn?: string;
  checkOut?: string;
  wishCount: number;
  isWish: boolean;
  lowest_price: number;
  viewCount: number;
};
