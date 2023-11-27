import { render, screen } from "@testing-library/react";
import CategoryQuery from "./index";
import { createWrapper } from "../../../test/test.utils";

describe("CategoryQuery", () => {
  it("renders CategoryQuery component", () => {
    const wrapper = createWrapper();

    render(
      <CategoryQuery
        regionNumber={99}
        accommodationNumber={99}
        category_parking={2}
        category_cooking={2}
        category_pickup={2}
      />,

      { wrapper },
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
