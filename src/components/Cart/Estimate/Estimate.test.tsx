import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Estimate from ".";
import formatNumber from "../../../utils/formatNumber";
import calculateTotalPrice from "../../../utils/calculateTotalPrice";

const testData = [
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

describe("예상 구매 내역 컴포넌트 테스트", () => {
  test("컴포넌트의 정보가 데이터에 맞게 표시되어야 한다.", async () => {
    render(<Estimate estimatedPrice={[...testData]} />, {
      wrapper: createWrapper(),
    });

    testData.forEach((item) => {
      const name = screen.getAllByText(item.accommodationName);
      const type = screen.getAllByText(item.roomName);
      const price = screen.getAllByText(`₩${formatNumber(item.price)}`);

      name.forEach((nameElement) => {
        expect(nameElement).toBeInTheDocument();
      });

      type.forEach((typeElement) => {
        expect(typeElement).toBeInTheDocument();
      });

      price.forEach((priceElement) => {
        expect(priceElement).toBeInTheDocument();
      });
    });
  });

  test("화면에 상품의 총 합계가 알맞은 정보로 표시 되어야 한다.", () => {
    render(<Estimate estimatedPrice={[...testData]} />, {
      wrapper: createWrapper(),
    });

    const textElement = screen.queryByText(
      `₩${formatNumber(calculateTotalPrice(testData))}`,
    );

    expect(textElement).toBeInTheDocument();
  });
});
