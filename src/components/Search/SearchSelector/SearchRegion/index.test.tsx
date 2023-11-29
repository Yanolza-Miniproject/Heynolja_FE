import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { RegionWrapper } from "../SearchRegion";

const mockHandleRegionClick = jest.fn();
jest.mock("../../../../hooks/useSearchHandler", () => ({
  useSearchHandlers: () => ({
    handleRegionClick: mockHandleRegionClick,
  }),
}));

const regions = [
  { name: "전국", value: 99 },
  { name: "서울시", value: 0 },
  { name: "경기도", value: 1 },
  { name: "강원도", value: 2 },
  { name: "충청도", value: 3 },
  { name: "전라도", value: 4 },
  { name: "경상도", value: 5 },
  { name: "제주도", value: 6 },
];

describe("검색바 테스트 - 지역 선택", () => {
  beforeEach(() => {
    mockHandleRegionClick.mockReset();
  });

  test("마우스 hover시 모든 옵션이 출력되어야 한다", () => {
    const { getByText } = render(
      <RecoilRoot>
        <RegionWrapper regions={regions} />
      </RecoilRoot>,
    );

    fireEvent.mouseEnter(getByText("지역 선택"));
    regions.forEach((region) => {
      expect(getByText(region.name)).toBeInTheDocument();
    });
  });

  const simulateHover = () => {
    render(
      <RecoilRoot>
        <RegionWrapper regions={regions} />
      </RecoilRoot>,
    );
    fireEvent.mouseEnter(screen.getByText("지역 선택"));
  };

  test("지역은 하나만 선택할 수 있다", async () => {
    simulateHover();

    const allRegion = screen.getByText("전국");
    fireEvent.click(allRegion);
    expect(mockHandleRegionClick).toHaveBeenCalledWith(99);

    const regionSeoul = screen.getByText("서울시");
    fireEvent.click(regionSeoul);
    expect(mockHandleRegionClick).toHaveBeenCalledWith(0);
  });
});
