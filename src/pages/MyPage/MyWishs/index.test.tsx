import { render, screen } from "@testing-library/react";
import MyWishs from ".";

describe("MyWish page 통합 테스트", () => {
  it("MyWish page 테스트", () => {
    render(<MyWishs />);
    const myWishElement = screen.getByText("MyWishs");
    expect(myWishElement).toBeInTheDocument();
  });
});
