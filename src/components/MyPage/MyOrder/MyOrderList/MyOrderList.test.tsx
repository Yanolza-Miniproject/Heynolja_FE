import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import React from "react";
import { render, screen } from "@testing-library/react";
import MyOrderList from ".";

// useGetMyOrder 훅을 모킹하는 코드
jest.mock("../../../../hooks/usePayment", () => ({
  useGetMyOrder: jest.fn(() => ({ data: { data: { data: mockOrderData } } })),
}));

const mockOrderData = [
  {
    paymentId: 1,
    totalPrice: 30000,
    totalCount: 2,
    paymentAt: "2023-11-21T12:00:01",
    rooms: [
      {
        id: 1,
        accommodationName: "부산 앙코르 호텔",
        roomName: "스위트룸",
        price: 300000,
        number_guests: 2,
        checkInAt: "2023-12-25",
        checkOutAt: "2023-12-26",
        roomUrl: "www.accommodation1.com/thumbnail.jpg",
      },
    ],
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

describe("MyOrderList 컴포넌트", () => {
  test("결제 내역이 있는 경우 정상적으로 렌더링되어야 함", () => {
    render(<MyOrderList />, { wrapper: createWrapper() });

    // 결제 완료한 숙소 정보가 포함된 요소를 찾습니다.
    const orderItem = screen.getByText("부산 앙코르 호텔");

    // 검증
    expect(orderItem).toBeInTheDocument();
  });

  test('결제 내역이 없는 경우 "로딩중..." 메시지가 나타나야 함', () => {
    // useGetMyOrder 훅을 모킹하여 빈 데이터를 반환하도록 설정
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    jest
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .spyOn(require("../../../../hooks/usePayment"), "useGetMyOrder")
      .mockReturnValueOnce({
        data: { data: [] },
      });

    render(<MyOrderList />, { wrapper: createWrapper() });

    const noOrderMessage = screen.queryByText("로딩중...");

    // 검증
    expect(noOrderMessage).toBeInTheDocument();
  });
});
