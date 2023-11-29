import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { TypeWrapper } from "../SearchType";

const mockHandleTypeClick = jest.fn();
jest.mock("../../../../hooks/useSearchHandler", () => ({
  useSearchHandlers: () => ({
    handleTypeClick: mockHandleTypeClick,
  }),
}));

const types = [
  { name: "전체 타입", value: 99 },
  { name: "호텔", value: 0 },
  { name: "콘도", value: 1 },
  { name: "호스텔", value: 2 },
  { name: "펜션", value: 3 },
  { name: "모텔", value: 4 },
  { name: "민박", value: 5 },
  { name: "게스트하우스", value: 6 },
  { name: "홈스테이", value: 7 },
  { name: "레지던스", value: 8 },
  { name: "한옥", value: 9 },
];

describe("검색바 테스트 - 숙소 타입", () => {
  beforeEach(() => {
    mockHandleTypeClick.mockReset();
  });

  test("마우스 hover시 모든 옵션이 출력되어야 한다", () => {
    const { getByText } = render(
      <RecoilRoot>
        <TypeWrapper types={types} />
      </RecoilRoot>,
    );

    fireEvent.mouseEnter(getByText("숙소 타입"));
    types.forEach((type) => {
      expect(getByText(type.name)).toBeInTheDocument();
    });
  });

  const simulateHover = () => {
    render(
      <RecoilRoot>
        <TypeWrapper types={types} />
      </RecoilRoot>,
    );
    fireEvent.mouseEnter(screen.getByText("숙소 타입"));
  };

  test("숙소 타입은 하나만 선택할 수 있다", async () => {
    simulateHover();

    fireEvent.click(screen.getByText("전체 타입"));
    expect(mockHandleTypeClick).toHaveBeenCalledWith(99);

    fireEvent.click(screen.getByText("펜션"));
    expect(mockHandleTypeClick).toHaveBeenCalledWith(3);
  });
});
