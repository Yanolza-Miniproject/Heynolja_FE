import { render, renderHook, screen } from "@testing-library/react";
import MyWishs from "../../../../pages/MyPage/MyWishs";
import { createWrapper } from "../../../../test/test.utils";
import { useGetMyWishList } from "../../../../api/MyPage/query";

const testData = {
  message: "success",
  data: [
    {
      id: 53096,
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
      id: 47247,
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
      id: 4709,
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
  ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockedUseGetMyWishList = useGetMyWishList as jest.Mock<any>;

console.log(mockedUseGetMyWishList);

jest.mock("../../../../api/MyPage/query");

describe("MyWish 쿼리 받아오기 테스트", () => {
  beforeEach(() => {
    mockedUseGetMyWishList.mockImplementation(() => ({
      isLoading: true,
      error: false,
    }));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("로딩중일 때 로딩중이라는 문구가 보여야 한다.", () => {
    mockedUseGetMyWishList.mockImplementation(() => ({
      isLoading: true,
      error: false,
    }));

    const wrapper = createWrapper();

    render(<MyWishs />, { wrapper });

    const { result } = renderHook(() => useGetMyWishList(), { wrapper });

    expect(result.current.isLoading).toBe(true);
    expect(screen.getByText("로딩중")).toBeInTheDocument();
  });

  test("로딩중이 아닐 때 로딩중이라는 문구가 보여서는 안된다.", () => {
    mockedUseGetMyWishList.mockImplementation(() => ({
      isLoading: false,
      error: false,
    }));

    const wrapper = createWrapper();

    render(<MyWishs />, { wrapper });

    const { result } = renderHook(() => useGetMyWishList(), { wrapper });

    expect(result.current.isLoading).toBe(false);
    expect(screen.queryByText("로딩중")).not.toBeInTheDocument();
  });

  test("데이터를 받아오면 데이터의 길이가 3이어야 한다.", () => {
    mockedUseGetMyWishList.mockImplementation(() => ({
      isLoading: false,
      error: false,
      data: testData,
    }));

    const wrapper = createWrapper();

    render(<MyWishs />, { wrapper });

    const { result } = renderHook(() => useGetMyWishList(), { wrapper });

    expect(result.current.data.data.length).toBe(3);
  });
});
