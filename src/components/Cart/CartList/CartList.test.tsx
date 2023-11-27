import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import userEvent from "@testing-library/user-event";
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
  const user = userEvent.setup();
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

  test("전체 선택을 누르면 모든 아이템이 선택 되어야 한다.", () => {
    render(<CartList data={testData} />, { wrapper: createWrapper() });

    const checkbox = screen.getByRole("checkbox", {
      name: `전체 선택(${testData.length}/${testData.length})`,
    });

    user.click(checkbox);

    const allCheckbox = screen.getAllByRole("checkbox");

    expect(allCheckbox.length).toBe(testData.length + 1);
  });

  test("전체선택 후 선택삭제 시 화면에 텅이라는 문구가 보여야 한다.", async () => {
    render(<CartList data={testData} />, { wrapper: createWrapper() });

    const button = screen.getByText("선택삭제");

    await waitFor(() => {
      user.click(button);

      const textElement = screen.queryByText("텅");
      expect(textElement).toBeInTheDocument();
    });
  });

  test("아이템 선택 후 선택삭제 시 선택된 아이템이 사라져야 한다.", async () => {
    render(<CartList data={testData} />, { wrapper: createWrapper() });

    const button = screen.getByText("선택삭제");
    const allCheckbox = screen.getAllByRole("checkbox");

    await waitFor(() => {
      user.click(allCheckbox[1]);
      user.click(button);
      const checkbox = screen.getAllByRole("checkbox");
      expect(checkbox.length).toBe(testData.length);
    });
  });

  test("아이템 선택 시 전체 선택 숫자에 변화가 생겨야 한다.", async () => {
    render(<CartList data={testData} />, { wrapper: createWrapper() });

    const allCheckbox = screen.getAllByRole("checkbox");

    await waitFor(() => {
      user.click(allCheckbox[1]);
      const textOne = screen.queryByText(
        `전체 선택(${testData.length - 1}/${testData.length})`,
      );
      expect(textOne).toBeInTheDocument();
    });

    await waitFor(() => {
      user.click(allCheckbox[1]);
      const textTwo = screen.queryByText(
        `전체 선택(${testData.length}/${testData.length})`,
      );
      expect(textTwo).toBeInTheDocument();
    });
  });
});
