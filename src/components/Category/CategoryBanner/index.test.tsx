import { render, screen } from "@testing-library/react";
import { createRecoilWrapper } from "../../../test/test.utils";
import userEvent from "@testing-library/user-event";
import CategoryBanner from "./";

describe("CategoryBanner", () => {
  it("텍스트가 잘 렌더링 되는지 테스트", () => {
    const wrapper = createRecoilWrapper();
    const onChange = jest.fn();

    const firstText = "Hey 놀자!";
    const secondText = "지금 둘러보세요.";

    render(
      <CategoryBanner
        firstText={firstText}
        secondText={secondText}
        searchFn={onChange}
      />,

      { wrapper },
    );

    expect(screen.getByText(firstText)).toBeInTheDocument();
    expect(screen.getByText(secondText)).toBeInTheDocument();
  });

  it("검색 버튼을 눌렀을 때 routing이 잘 되는지 테스트", async () => {
    const wrapper = createRecoilWrapper();
    const onChange = jest.fn();
    const user = userEvent;

    const firstText = "Hey 놀자!";
    const secondText = "지금 둘러보세요.";

    render(
      <CategoryBanner
        firstText={firstText}
        secondText={secondText}
        searchFn={onChange}
      />,

      { wrapper },
    );

    const button = screen.getByTestId("search-button");
    user.click(button);

    expect(onChange).toHaveBeenCalled;
  });
});
