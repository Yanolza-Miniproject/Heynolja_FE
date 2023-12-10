import { render, screen, fireEvent } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { OptionsWrapper } from "../SearchOptions";

const mockHandleOptionClick = jest.fn();
jest.mock("../../../../hooks/useSearchHandler", () => ({
  useSearchHandlers: () => ({
    handleOptionClick: mockHandleOptionClick,
  }),
}));

const options = [
  { name: "상관 없음", value: 99 },
  { name: "주차 가능", value: 0 },
  { name: "조리 가능", value: 1 },
  { name: "픽업 가능", value: 2 },
];

describe("검색바 테스트 - 추가 옵션", () => {
  beforeEach(() => {
    mockHandleOptionClick.mockReset();
  });

  test("마우스 hover시 모든 옵션이 출력되어야 한다", () => {
    const { getByText } = render(
      <RecoilRoot>
        <OptionsWrapper options={options} />
      </RecoilRoot>,
    );

    fireEvent.mouseEnter(getByText("추가 옵션"));
    options.forEach((option) => {
      expect(getByText(option.name)).toBeInTheDocument();
    });
  });

  const simulateHover = () => {
    render(
      <RecoilRoot>
        <OptionsWrapper options={options} />
      </RecoilRoot>,
    );
    fireEvent.mouseEnter(screen.getByText("추가 옵션"));
  };

  test('"상관 없음"이 선택된 경우, 나머지 세 옵션은 동시에 선택 불가함', async () => {
    simulateHover();

    const noConcernOption = screen.getByText("상관 없음");
    fireEvent.click(noConcernOption);
    expect(mockHandleOptionClick).toHaveBeenCalledWith(99);

    const parkingOption = screen.getByText("주차 가능");
    const cookingOption = screen.getByText("조리 가능");
    const pickupOption = screen.getByText("픽업 가능");

    fireEvent.click(parkingOption);
    fireEvent.click(cookingOption);
    fireEvent.click(pickupOption);

    expect(parkingOption).not.toHaveAttribute("isSelected", "true");
    expect(cookingOption).not.toHaveAttribute("isSelected", "true");
    expect(pickupOption).not.toHaveAttribute("isSelected", "true");
  });

  test('"상관 없음"을 제외한 나머지 세 옵션은 중복 선택 가능', async () => {
    simulateHover();

    fireEvent.click(screen.getByText("주차 가능"));
    expect(mockHandleOptionClick).toHaveBeenCalledWith(0);

    fireEvent.click(screen.getByText("조리 가능"));
    expect(mockHandleOptionClick).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText("픽업 가능"));
    expect(mockHandleOptionClick).toHaveBeenCalledWith(2);

    fireEvent.click(screen.getByText("상관 없음"));
    expect(mockHandleOptionClick).toHaveBeenCalledWith(99);
  });
});
