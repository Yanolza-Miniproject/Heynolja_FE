import { render } from "@testing-library/react";
import InfiniteScroller from "./"; // Adjust the import path as needed

describe("InfiniteScroller test", () => {
  test("화면에 props로 받아온 데이터 잘 보여지는 지 test", () => {
    render(
      <InfiniteScroller
        length={20}
        hasNextPage={true}
        fn={() => {}}
        children
      />,
    );
  });
});
