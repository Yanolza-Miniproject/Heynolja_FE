import { render, screen } from "@testing-library/react";
import MyWishHeader from ".";

describe("MyWish Header 테스트", () => {
  test("MyWish Header 렌더링 테스트", () => {
    render(<MyWishHeader wishCount={5} />);
    expect(screen.getByText("❤️ 찜한 목록")).toBeInTheDocument();
  });

  test("MyWish Header props로 받아온 숫자 테스트", () => {
    render(<MyWishHeader wishCount={5} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
