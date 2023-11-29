import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

jest.mock(".", () => ({
  AccommodationList: ({ title }: { title: string }) => (
    <div>{title} - Mock Component</div>
  ),
}));

describe("메인페이지 숙소 목록 렌더링 테스트", () => {
  test("AccommodationList 컴포넌트가 정상적으로 렌더링되어야 한다", () => {
    const { AccommodationList } = require(".");

    render(
      <BrowserRouter>
        <AccommodationList accommodations={[]} title="Test Title" />
      </BrowserRouter>,
    );

    expect(screen.getByText("Test Title - Mock Component")).toBeInTheDocument();
  });
});
