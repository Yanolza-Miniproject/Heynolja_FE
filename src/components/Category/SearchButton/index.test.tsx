import { render, screen } from "@testing-library/react";
import SearchButton from ".";

describe("SearchButton", () => {
  it("버튼이 잘 렌더링 되는지 테스트", () => {
    render(<SearchButton />);

    expect(
      screen.getByText("원하는 검색지를 찾아보세요 🕵️‍♀️"),
    ).toBeInTheDocument();
  });
});
