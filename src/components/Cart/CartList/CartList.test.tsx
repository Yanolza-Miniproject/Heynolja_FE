import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CartList from ".";
import { cartList } from "../../../mock/myPageData";

describe("장바구니 테스트", () => {
  const queryClient = new QueryClient();
  test("전체 선택 체크박스 클릭 시 박스 색상 변화 테스트", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RecoilRoot>
            <CartList cart={cartList} setCart={() => {}} />
          </RecoilRoot>
        </BrowserRouter>
      </QueryClientProvider>,
    );
    const checkbox = screen.getByRole("checkbox", { name: /전체 선택/i });

    userEvent.click(checkbox);

    const computedStyle = window.getComputedStyle(checkbox);
    expect(computedStyle.borderColor).toBe("#ff5100");
  });
});
