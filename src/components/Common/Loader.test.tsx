import { render } from "@testing-library/react";
import { Loader } from "./Loader";
import { useIsFetching } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
  ...jest.requireActual("@tanstack/react-query"),
  useIsFetching: jest.fn(),
}));

describe("로딩 애니메이션 렌더링 테스트", () => {
  it("데이터 로딩시 해당 로딩 애니메이션이 출력되어야 한다.", () => {
    (useIsFetching as jest.Mock).mockImplementation(() => 1);

    const { getByText } = render(<Loader />);

    expect(getByText("잠시만 기다려주세요.")).toBeInTheDocument();
  });

  it("데이터 로딩 중이 아닐 시, 로딩 애니메이션은 출력되지 않는다.", () => {
    (useIsFetching as jest.Mock).mockImplementation(() => 0);

    const { queryByText } = render(<Loader />);

    expect(queryByText("잠시만 기다려주세요.")).not.toBeInTheDocument();
  });
});
