import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CategoryProps } from "../pages/Category/Category.types";
import { CategoryItemPageProps } from "../components/Category/CategoryItemWrapper/CategoryItemWrapper.types";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

export const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {" "}
      <BrowserRouter>
        <RecoilRoot>{children}</RecoilRoot>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export const createRecoilWrapper = () => {
  return ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>
      <RecoilRoot>{children}</RecoilRoot>
    </BrowserRouter>
  );
};

export const testData = {
  message: "success",
  data: [
    {
      id: "53096",
      name: "비진도 바다이야기 펜션",
      address: "경상남도 통영시 한산면 외항길 78",
      phone_number: "055-642-6171",
      type: 4,
      wishCount: 644,
      thumbnailUrl:
        "https://res.cloudinary.com/dtf6uf7vi/image/upload/v1700183654/Home/testid.jpg",
      lowest_price: 488,
      likes_available: true,
      categoryParking: 1,
      categoryCooking: 1,
      categoryPickup: 1,
      viewCount: 707,
      checkIn: "18:00",
      checkOut: "12:00",
      room_counts: 8,
    },
    {
      id: "47247",
      name: "토요코 인 서면",
      address: "부산광역시 부산진구 서전로 39",
      phone_number: "051-638-1045",
      type: 1,
      wishCount: 217,
      thumbnailUrl:
        "https://res.cloudinary.com/dtf6uf7vi/image/upload/v1700183654/Home/testid.jpg",
      lowest_price: 425,
      likes_available: true,
      categoryParking: 1,
      categoryCooking: 1,
      categoryPickup: 0,
      viewCount: 246,
      checkIn: "18:00",
      checkOut: "12:00",
      room_counts: 6,
    },
    {
      id: "4709",
      name: "아모렉스관광호텔",
      address: "서울특별시 성동구 왕십리로20길 19",
      phone_number: "02-2292-7634",
      type: 9,
      wishCount: 556,
      thumbnailUrl:
        "https://res.cloudinary.com/dtf6uf7vi/image/upload/v1700183654/Home/testid.jpg",
      lowest_price: 260,
      likes_available: true,
      categoryParking: 1,
      categoryCooking: 0,
      categoryPickup: 0,
      viewCount: 865,
      checkIn: "18:00",
      checkOut: "12:00",
      room_counts: 16,
    },
  ] as CategoryProps[],
} as CategoryItemPageProps;
