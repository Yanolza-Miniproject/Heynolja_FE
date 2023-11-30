import { render, screen } from "@testing-library/react";
import CategoryFilterViewButton from ".";
import userEvent from "@testing-library/user-event";
import { createWrapper } from "../../../../test/test.utils";

const mockFn = jest.fn();

describe("CategoryFilterViewButton", () => {
  it("렌더링 테스트", () => {
    const wrapper = createWrapper();
    render(
      <CategoryFilterViewButton
        buttonText="바둑판보기"
        isOn={true}
        fn={mockFn}
      />,
      { wrapper },
    );

    expect(screen.getByText("바둑판보기")).toBeInTheDocument();
  });

  it("버튼 클릭 테스트", () => {
    const user = userEvent;
    const wrapper = createWrapper();

    render(
      <CategoryFilterViewButton
        buttonText="바둑판보기"
        isOn={true}
        fn={mockFn}
      />,
      { wrapper },
    );

    const button = screen.getByRole("button");

    user.click(button);

    expect(mockFn).toHaveBeenCalled;
  });
});
