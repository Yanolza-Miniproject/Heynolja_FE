import { render, screen, fireEvent } from "@testing-library/react";
import { SearchButton, SearchResetButton } from "./index";

describe("검색페이지 검색버튼", () => {
  it("버튼 클릭시 선택된 카테고리를 종합하여 검색 쿼리를 보낸다", () => {
    const sendSearchQuery = jest.fn();
    render(<SearchButton onClick={sendSearchQuery} />);

    const button = screen.getByRole("button", { name: /검색/i });

    fireEvent.click(button);
    expect(sendSearchQuery).toHaveBeenCalledTimes(1);
  });
});

describe("검색페이지 리셋버튼", () => {
  it("버튼 클릭시 검색 카테고리가 리셋된다", () => {
    const handleResetSearch = jest.fn();
    render(<SearchResetButton onClick={handleResetSearch} />);

    const button = screen.getByRole("button", { name: /다시 검색하기/i });

    fireEvent.click(button);
    expect(handleResetSearch).toHaveBeenCalledTimes(1);
  });
});
