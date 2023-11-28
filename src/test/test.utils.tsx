import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CategoryProps } from "../pages/Category/Category.types";
import { CategoryItemPageProps } from "../components/Category/CategoryItemWrapper";
import { RecoilRoot } from "recoil";

export const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const createRecoilWrapper = () => {
  return ({ children }: { children: React.ReactNode }) => (
    <RecoilRoot>{children}</RecoilRoot>
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
      like_count: 644,
      thumbnail_url:
        "https://res.cloudinary.com/dtf6uf7vi/image/upload/v1700183654/Home/testid.jpg",
      price: 488,
      likes_available: true,
      category_parking: 1,
      category_cooking: 1,
      category_pickup: 1,
      view_count: 707,
      check_in: "18:00",
      check_out: "12:00",
      room_counts: 8,
    },
    {
      id: "47247",
      name: "토요코 인 서면",
      address: "부산광역시 부산진구 서전로 39",
      phone_number: "051-638-1045",
      type: 1,
      like_count: 217,
      thumbnail_url:
        "https://res.cloudinary.com/dtf6uf7vi/image/upload/v1700183654/Home/testid.jpg",
      price: 425,
      likes_available: true,
      category_parking: 1,
      category_cooking: 1,
      category_pickup: 0,
      view_count: 246,
      check_in: "18:00",
      check_out: "12:00",
      room_counts: 6,
    },
    {
      id: "4709",
      name: "아모렉스관광호텔",
      address: "서울특별시 성동구 왕십리로20길 19",
      phone_number: "02-2292-7634",
      type: 9,
      like_count: 556,
      thumbnail_url:
        "https://res.cloudinary.com/dtf6uf7vi/image/upload/v1700183654/Home/testid.jpg",
      price: 260,
      likes_available: true,
      category_parking: 1,
      category_cooking: 0,
      category_pickup: 0,
      view_count: 865,
      check_in: "18:00",
      check_out: "12:00",
      room_counts: 16,
    },
  ] as CategoryProps[],
} as CategoryItemPageProps;
