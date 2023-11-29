import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import MyWishs from "../../../../pages/MyPage/MyWishs";
import { createWrapper, testData } from "../../../../test/test.utils";
import { useGetMyWishList } from "../../../../api/MyPage/query";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

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

    render(<MyWishs />, { wrapper });

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

    render(<MyWishs />, { wrapper });

    const { result } = renderHook(() => useGetMyWishList(), { wrapper });

    waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(screen.queryByText("로딩중")).not.toBeInTheDocument();
    });
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

    waitFor(() => {
      expect(result.current.data.data.length).toBe(3);
    });
  });

  test("데이터가 뷰포트안에 들어오면 데이터의 opacity가 1이어야 한다.", async () => {
    mockedUseGetMyWishList.mockImplementation(() => ({
      isLoading: false,
      error: false,
      data: testData,
    }));

    const wrapper = createWrapper();

    render(<MyWishs />, { wrapper });

    await act(() => {
      mockAllIsIntersecting(true);
    });
    const dataTestElement = document.getElementById("itemTest");

    waitFor(() => {
      expect(dataTestElement).toHaveStyle("opacity: 1");
    });
  });

  test("데이터의 length값이 찜한 목록의 숫자와 같게하는 test", () => {
    mockedUseGetMyWishList.mockImplementation(() => ({
      isLoading: false,
      error: false,
      data: testData,
    }));

    const wrapper = createWrapper();

    render(<MyWishs />, { wrapper });

    const { result } = renderHook(() => useGetMyWishList(), { wrapper });

    const wishCountElement = screen.getByTestId("wishCount");

    waitFor(() => {
      expect(result.current.data.data.length).toBe(3);
      expect(wishCountElement).toHaveTextContent("3");
    });
  });
});
