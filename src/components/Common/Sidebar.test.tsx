import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "./Sidebar";
import { windowScrollToPolyfill } from "seamless-scroll-polyfill";

jest.mock("seamless-scroll-polyfill");

describe("사이드바 버튼 테스트", () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
    windowScrollToPolyfill();
  });

  test("TOP 버튼 클릭시 화면 최상단으로 스크롤이 이동되어야 한다", () => {
    render(<Sidebar />);

    const topButton = screen.getByText("TOP");
    fireEvent.click(topButton);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
    expect(windowScrollToPolyfill).toHaveBeenCalled();
  });
});
