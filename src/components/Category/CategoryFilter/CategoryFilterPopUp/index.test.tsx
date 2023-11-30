import { render, screen, waitFor } from "@testing-library/react";
import { accommoationTypes } from "../CategoryFilter.constants";
import userEvent from "@testing-library/user-event";
import CategoryFilterPopUp from "./";
import { createRecoilWrapper } from "../../../../test/test.utils";

describe("CategoryFilterPopUp", () => {
  test("카테고리 필터 팝업 렌더링 테스트", () => {
    const wrapper = createRecoilWrapper();

    render(
      <CategoryFilterPopUp
        listData={accommoationTypes}
        buttonText="원하는 숙소를 찾아보세요"
      />,
      { wrapper },
    );
  });

  test("버튼을 클릭했을 때 카테고리가 잘 보이는 지", () => {
    const wrapper = createRecoilWrapper();
    const user = userEvent;

    render(
      <CategoryFilterPopUp
        listData={accommoationTypes}
        buttonText="원하는 숙소를 찾아보세요"
      />,
      { wrapper },
    );

    const button = screen.getByTestId("CategorySearchButton");
    user.click(button);

    waitFor(() => {
      const category = screen.getByText(accommoationTypes[3].label);
      expect(category).toBeInTheDocument();
    });
  });

  test("카테고리를 클릭했을 때 카테고리가 잘 선택되는 지", async () => {
    const wrapper = createRecoilWrapper();
    const user = userEvent;

    render(
      <CategoryFilterPopUp
        listData={accommoationTypes}
        buttonText="원하는 숙소를 찾아보세요"
      />,
      { wrapper },
    );

    const button = screen.getByTestId("CategorySearchButton");
    await user.click(button);

    const popUp = screen.getByText(accommoationTypes[3].label);
    await user.click(popUp);

    waitFor(() => {
      const selected = screen.getByTestId("CategoryPopUpItem");
      expect(selected).toHaveTextContent(accommoationTypes[3].label);
    });
  });
});
