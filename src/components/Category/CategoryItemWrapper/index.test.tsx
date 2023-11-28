import { render, screen } from "@testing-library/react";
import CategoryItemWrapper from "./index";
import { createWrapper, testData } from "../../../test/test.utils";

const propsData = [
  {
    message: testData.message,
    data: testData.data,
  },
];

describe("CategoryItemWrapper", () => {
  const wrapper = createWrapper();
  it("renders CategoryItemWrapper component", () => {
    if ("IntersectionObserver" in window) {
      render(<CategoryItemWrapper data={propsData} />, { wrapper });

      expect(screen.getByText(testData.data[0].name)).toBeInTheDocument();
    }
  });

  it("data가 없을 때 검색 결과가 없습니다. 문구가 보여야 한다.", () => {
    if ("IntersectionObserver" in window) {
      render(<CategoryItemWrapper data={[]} />, { wrapper });

      expect(screen.getByText("검색 결과가 없습니다.")).toBeInTheDocument();
    }
  });
});
