import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Complete from ".";
import { useGetCompleteData } from "../../hooks/useGetCompleteData";
import { paymentData } from "../../mock/myPageData";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockedUseGetCompleteData = useGetCompleteData as jest.Mock<any>;
jest.mock("../../hooks/useGetCompleteData");

const createWrapper = () => {
  const queryClient = new QueryClient();

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};

describe("결제 완료 페이지 테스트", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test("결제 데이터가 잘 들어오면 결제 완료🎉 라는 문구가 보여야 한다.", () => {
    mockedUseGetCompleteData.mockImplementation(() => ({
      isLoading: false,
      data: {
        data: {
          data: [paymentData[0]],
        },
      },
    }));

    render(<Complete />, { wrapper: createWrapper() });

    const textElement = screen.getByText("결제 완료🎉");
    expect(textElement).toBeInTheDocument();
  });

  test("결제 데이터가 없으면 notFound화면이 보여야 한다.", () => {
    mockedUseGetCompleteData.mockImplementation(() => ({
      isLoading: false,
      data: {
        data: {
          data: [],
        },
      },
    }));

    render(<Complete />, { wrapper: createWrapper() });

    const textElement = screen.getByText("다시 검색하기");
    expect(textElement).toBeInTheDocument();
  });

  test("로딩중일 때 로딩중이라는 문구가 보여야 한다.", () => {
    mockedUseGetCompleteData.mockImplementation(() => ({
      isLoading: true,
    }));

    render(<Complete />, { wrapper: createWrapper() });

    const textElement = screen.getByText("로딩중");
    expect(textElement).toBeInTheDocument();
  });
});
