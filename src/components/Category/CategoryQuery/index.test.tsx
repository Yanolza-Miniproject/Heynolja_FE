import { render, screen } from "@testing-library/react";
import CategoryQuery from ".";
import { createWrapper } from "../../../test/test.utils";
import { useCategoryInfiniteQuery } from "../../../hooks/useCategoryInfiniteQuery";
import { MockUpData } from "../../../mocks/browser/constant";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUseCategoryInfiniteQuery = useCategoryInfiniteQuery as jest.Mock<any>;

const mockData = {
  pageParams: [0, 1],
  pages: [
    {
      message: "성공",
      data: MockUpData.slice(0, 20),
    },
    {
      message: "성공",
      data: MockUpData.slice(20, 40),
    },
  ],
};

jest.mock("../../../hooks/useCategoryInfiniteQuery", () => ({
  useCategoryInfiniteQuery: jest.fn(),
}));

describe("CategoryQuery", () => {
  it("데이터가 로딩중일 때 테스트", async () => {
    mockUseCategoryInfiniteQuery.mockImplementation(() => ({
      data: mockData,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isLoading: true,
    }));

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
