import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CartList from ".";

export const testData = [
  {
    id: 1,
    accommodationName: "라마다 제주시티 호텔",
    roomUrl: "",
    roomName: "스위트 더블",
    price: 210000,
    numberOfGuests: 2,
    checkInAt: "2023-11-30",
    checkOutAt: "2023-12-02",
  },
  {
    id: 2,
    accommodationName: "라마다 제주시티 호텔",
    roomUrl: "",
    roomName: "스탠다드 트윈",
    price: 95000,
    numberOfGuests: 2,
    checkInAt: "2023-11-26",
    checkOutAt: "2023-11-28",
  },
];

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

const mockResponse = jest.fn();
Object.defineProperty(window, "location", {
  value: {
    hash: {
      endsWith: mockResponse,
      includes: mockResponse,
    },
    assign: mockResponse,
  },
  writable: true,
});

describe("장바구니 페이지 데이터 받아오기 테스트", () => {
  afterEach(() => {
    mockResponse.mockClear();
  });
  test("데이터가 없을 때 텅이라는 문구가 보여야 한다.", () => {
    render(<CartList data={[]} />, { wrapper: createWrapper() });

    const textElement = screen.queryByText("텅");
    expect(textElement).toBeInTheDocument();
  });

  test("데이터가 있을 때 CartItem 컴포넌트가 보여야 한다.", () => {
    render(<CartList data={testData} />, { wrapper: createWrapper() });

    testData.forEach((item, i) => {
      const textElement = screen.getAllByText(item.accommodationName);
      expect(textElement[i]).toBeInTheDocument();
    });

    const textElement = screen.queryByText(
      `전체 선택(${testData.length}/${testData.length})`,
    );
    expect(textElement).toBeInTheDocument();
  });

  test("선택된 아이템은 예상 구매 내역에 포함이 된다.", async () => {
    render(<CartList data={testData} />, { wrapper: createWrapper() });

    const allCheckbox = screen.getAllByRole("checkbox");

    const estimateItems = screen.queryAllByTestId("estimate-item");

    expect(allCheckbox.length - 1).toBe(estimateItems.length);
  });
});
