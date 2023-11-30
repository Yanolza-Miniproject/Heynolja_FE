import { render, screen } from "@testing-library/react";
import CategoryFilter from "./";
import { createRecoilWrapper } from "../../../test/test.utils";

describe("CategoryBanner", () => {
  test("카테고리 필터가 잘 젹용되는 지 테스트", () => {
    const wrapper = createRecoilWrapper();

    render(<CategoryFilter />, { wrapper });
  });

  test("카테고리 버튼 text가 잘 출력되는 지 테스트", () => {
    const wrapper = createRecoilWrapper();

    render(<CategoryFilter />, { wrapper });

    const accommodationButton = screen.getByText("원하는 숙소를 찾아보세요");
    const regionButton = screen.getByText("원하는 장소를 찾아보세요");

    expect(accommodationButton).toBeInTheDocument();
    expect(regionButton).toBeInTheDocument();
  });
});
