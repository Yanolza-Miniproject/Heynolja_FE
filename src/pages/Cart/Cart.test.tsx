import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Cart from ".";
import { useGetMyCart } from "../../hooks/useCartFetch";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockedUseGetMyCart = useGetMyCart as jest.Mock<any>;
jest.mock("../../hooks/useCartFetch");

const createWrapper = () => {
  const queryClient = new QueryClient();

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RecoilRoot>{children}</RecoilRoot>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

describe("장바구니 로딩 테스트", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test("로딩중일 때 로딩중이라는 문구가 보여야 한다.", () => {
    mockedUseGetMyCart.mockImplementation(() => ({
      isLoading: true,
    }));

    render(<Cart />, { wrapper: createWrapper() });

    const textElement = screen.queryByText("로딩중");
    expect(textElement).toBeInTheDocument();
  });

  test("로딩중이 아닐 때 로딩중이라는 문구가 보여서는 안된다.", () => {
    mockedUseGetMyCart.mockImplementation(() => ({
      isLoading: false,
    }));

    render(<Cart />, { wrapper: createWrapper() });

    const textElement = screen.queryByText("로딩중");
    expect(textElement).not.toBeInTheDocument();
  });
});
