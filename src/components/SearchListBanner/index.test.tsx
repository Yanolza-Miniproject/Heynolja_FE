import { render, screen } from "@testing-library/react";
import SearchListBanner from ".";
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
    expect(screen.getByText("SearchListBanner")).toBeInTheDocument();
  });
});
