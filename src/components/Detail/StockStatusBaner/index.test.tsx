import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import StockStatusBanner from "./";

describe("StockStatusBanner 테스트", () => {
  test("재고가 0일 때 품절 배너가 표시된다.", () => {
    render(<StockStatusBanner inventory={0} />);
    expect(screen.getByText("품절")).toBeInTheDocument();
  });

  test("재고가 낮을 때(1-5) 품절 임박 배너가 표시된다.", () => {
    for (let i = 1; i <= 5; i++) {
      render(<StockStatusBanner inventory={i} />);
      expect(screen.getByText("품절 임박")).toBeInTheDocument();
      cleanup();
    }
  });

  test("재고가 충분할 때(5 이상) 배너가 표시되지 않는다.", () => {
    render(<StockStatusBanner inventory={6} />);
    expect(screen.queryByText("품절")).not.toBeInTheDocument();
    expect(screen.queryByText("품절 임박")).not.toBeInTheDocument();
  });
});
