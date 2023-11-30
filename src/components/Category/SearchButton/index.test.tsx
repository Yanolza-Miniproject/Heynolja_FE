import { render, screen, waitFor } from "@testing-library/react";
import SearchButton from ".";
import { createWrapper } from "../../../test/test.utils";

const mockNavigate = jest.fn();

describe("SearchButton", () => {
  it("버튼이 잘 렌더링 되는지 테스트", () => {
    const wrapper = createWrapper();
    render(<SearchButton />, { wrapper });

    expect(
      screen.getByText("원하는 검색지를 찾아보세요 🕵️‍♀️"),
    ).toBeInTheDocument();
  });

  it("버튼 클릭 시 /search 로 이동하는지 테스트", () => {
    const wrapper = createWrapper();
    render(<SearchButton />, { wrapper });

    const button = screen.getByText("원하는 검색지를 찾아보세요 🕵️‍♀️");
    button.click();

    waitFor(() => expect(mockNavigate).toHaveBeenCalledWith("/search"));
  });
});
