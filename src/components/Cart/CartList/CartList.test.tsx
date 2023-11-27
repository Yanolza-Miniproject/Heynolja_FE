import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CartList from ".";

export const testData = [
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

describe("장바구니 페이지 데이터 받아오기 테스트", () => {
  test("데이터가 없을 때 텅이라는 문구가 보여야 한다.", () => {
    render(<CartList data={[]} />, { wrapper: createWrapper() });

    const textElement = screen.queryByText("텅");
    expect(textElement).toBeInTheDocument();
  });

  test("데이터가 있을 때 CartItem 컴포넌트가 보여야 한다.", () => {
    render(<CartList data={testData} />, { wrapper: createWrapper() });

    testData.forEach((item, i) => {
      const textElement = screen.getAllByText(item.accommodation_name);
      expect(textElement[i]).toBeInTheDocument();
    });

    const textElement = screen.queryByText(
      `전체 선택(${testData.length}/${testData.length})`,
    );
    expect(textElement).toBeInTheDocument();
  });
});
