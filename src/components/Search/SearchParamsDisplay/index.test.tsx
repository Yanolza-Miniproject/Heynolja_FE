import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import * as recoilHooks from "recoil";
import { SearchParamsDisplay } from "../SearchParamsDisplay";
import * as searchHandlers from "../../../hooks/useSearchHandler";

jest.mock("recoil", () => ({
  ...jest.requireActual("recoil"),
  useRecoilValue: jest.fn(),
}));

jest.mock("../../../hooks/useSearchHandler", () => ({
  useSearchHandlers: jest.fn(),
}));

const mockSearchState = {
  selectedRegion: 0,
  selectedType: 1,
  selectedOptions: [99],
};

const mockHandleResetSearch = jest.fn();

beforeEach(() => {
  (recoilHooks.useRecoilValue as jest.Mock).mockReturnValue(mockSearchState);

  (searchHandlers.useSearchHandlers as jest.Mock).mockReturnValue({
    handleResetSearch: mockHandleResetSearch,
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("선택한 검색 카테고리 상단 출력 테스트", () => {
  test("현재 선택된 항목에 맞는 해당 카테고리가 상단에 출력되어야 함", () => {
    render(
      <RecoilRoot>
        <SearchParamsDisplay />
      </RecoilRoot>,
    );

    const regionDisplay = screen.getByText("서울시");
    const typeDisplay = screen.getByText("콘도");
    const optionsDisplay = screen.getAllByText("상관 없음");

    expect(regionDisplay).toBeInTheDocument();
    expect(typeDisplay).toBeInTheDocument();
    expect(optionsDisplay).toHaveLength(1);
  });

  test("'다시 검색하기' 버튼을 누를 경우 기존 선택된 카테고리가 모두 리셋되어야 함", () => {
    render(
      <RecoilRoot>
        <SearchParamsDisplay />
      </RecoilRoot>,
    );

    const resetButton = screen.getByRole("button");
    resetButton.click();

    expect(mockHandleResetSearch).toHaveBeenCalledTimes(1);
  });
});
