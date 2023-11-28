import { render, screen, waitFor } from "@testing-library/react";
import SearchListBanner from ".";
import userEvent from "@testing-library/user-event";
import { createWrapper } from "../../test/test.utils";

describe("SearchListBanner", () => {
  it("should render the component", () => {
    const wrapper = createWrapper();

    render(
      <SearchListBanner
        validParams={{
          region: 99,
          type: 99,
          category_parking: 1,
          category_cooking: 1,
          category_pickup: 1,
        }}
      />,

      { wrapper },
    );
    expect(screen.getByText("픽업가능")).toBeInTheDocument();
  });

  it("검색결과가 없을 때 모든 숙소의 검색 결과입니다. 라는 문구가 보여야 합니다.", () => {
    const wrapper = createWrapper();

    render(
      <SearchListBanner
        validParams={{
          region: 99,
          type: 99,
          category_parking: 2,
          category_cooking: 2,
          category_pickup: 2,
        }}
      />,

      { wrapper },
    );
    expect(
      screen.getByText("모든 숙소의 검색 결과입니다."),
    ).toBeInTheDocument();
  });

  it("region이 0일때(서울), 숙소를 클릭하면 /results?page=0&region=0 로 이동해야 합니다.", () => {
    const wrapper = createWrapper();
    const router = jest.fn();
    const user = userEvent;

    render(
      <SearchListBanner
        validParams={{
          region: 0,
          type: 99,
          category_parking: 2,
          category_cooking: 2,
          category_pickup: 2,
        }}
      />,

      { wrapper },
    );

    const button = screen.getByText("서울시");
    user.click(button);

    waitFor(() => {
      expect(button).toBeInTheDocument();
      expect(router).toHaveBeenCalledWith("/results?page=0&region=0");
    });
  });
});
