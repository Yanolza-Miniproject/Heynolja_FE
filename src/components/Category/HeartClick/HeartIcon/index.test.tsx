import { render } from "@testing-library/react";
import HeartIcon from "./index";

describe("HeartIcon", () => {
  it("버튼 클릭했을 때 이미 가지고 있는 값이 true일 경우", () => {
    render(<HeartIcon clicked={true} />);
    const svgElement = document.querySelector("svg");
    expect(svgElement).toHaveAttribute("fill", "red");
  });

  test("버튼 클릭했을 때 이미 가지고 있는 값이 false일 경우", () => {
    render(<HeartIcon clicked={false} />);
    const svgElement = document.querySelector("svg");
    expect(svgElement).toHaveAttribute("fill", "none");
  });
});
