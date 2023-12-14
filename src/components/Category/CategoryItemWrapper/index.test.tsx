import { act, render, screen, waitFor } from "@testing-library/react";
import CategoryItemWrapper from "./index";
import { createWrapper, testData } from "../../../test/test.utils";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

const propsData = [
  {
    message: testData.message,
    data: testData.data,
  },
];

describe("CategoryItemWrapper", () => {
  beforeAll(() => {
    act(() => {
      mockAllIsIntersecting(true);
    });
  });

  const wrapper = createWrapper();
  it("renders CategoryItemWrapper component", () => {
    render(<CategoryItemWrapper data={propsData} />, { wrapper });

    expect(screen.getByText(testData.data[0].name)).toBeInTheDocument();
  });

  it("data가 없을 때 검색 결과가 없습니다. 문구가 보여야 한다.", () => {
    render(<CategoryItemWrapper data={[]} />, { wrapper });

    waitFor(() => {
      expect(screen.getByText("검색 결과가 없습니다.")).toBeInTheDocument();
    });
  });

  it("should create a hook inView", () => {
    render(<CategoryItemWrapper data={propsData} />, { wrapper });

    expect(screen.getByText(testData.data[0].name)).toBeInTheDocument();
  });
});
