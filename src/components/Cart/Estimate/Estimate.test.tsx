import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Estimate from ".";
import formatNumber from "../../../utils/formatNumber";
import calculateTotalPrice from "../../../utils/calculateTotalPrice";

const testData = [
  {
    room_basket_id: 1,
    accommodation_name: "라마다 제주시티 호텔",
    room_image_url: [""],
    room_name: "스위트 더블",
    price: 210000,
    number_guests: 2,
    check_in_at: "2023-11-30",
    check_out_at: "2023-12-02",
  },
  {
    room_basket_id: 2,
    accommodation_name: "라마다 제주시티 호텔",
    room_image_url: [""],
    room_name: "스탠다드 트윈",
    price: 95000,
    number_guests: 2,
    check_in_at: "2023-11-26",
    check_out_at: "2023-11-28",
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
      const name = screen.getAllByText(item.accommodation_name);
      const type = screen.getAllByText(item.room_name);
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
