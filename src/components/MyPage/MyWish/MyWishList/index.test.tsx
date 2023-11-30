import { render, renderHook, screen, waitFor } from "@testing-library/react";
import MyWishList from "./index";
import { createWrapper } from "../../../../test/test.utils";
import { useGetMyWishList } from "../../../../api/MyPage/query";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockedUseGetMyWishList = useGetMyWishList as jest.Mock<any>;

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

    render(<MyWishList />, { wrapper });

    const { result } = renderHook(() => useGetMyWishList(), { wrapper });

    waitFor(() => {
      expect(result.current.isLoading).toBe(true);
      expect(screen.getByText("로딩중")).toBeInTheDocument();
    });
  });

  test("로딩중이 아닐 때 로딩중이라는 문구가 보여서는 안된다.", () => {
    mockedUseGetMyWishList.mockImplementation(() => ({
      isLoading: false,
      error: false,
    }));

    const wrapper = createWrapper();

    render(<MyWishList />, { wrapper });

    const { result } = renderHook(() => useGetMyWishList(), { wrapper });

    waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(screen.queryByText("로딩중")).not.toBeInTheDocument();
    });
  });
});
