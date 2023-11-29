import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "../Main";

jest.mock("../../hooks/useMainListFetch", () => ({
  useFetchTopLikedAccom: jest.fn(),
  useFetchAccomWithParking: jest.fn(),
  useFetchAllAccommodations: jest.fn(),
}));

describe("메인페이지 테스트", () => {
  const queryClient = new QueryClient();

  test("isLoading 상태일 경우 관련 로딩 메시지를 출력한다", () => {
    require("../../hooks/useMainListFetch").useFetchTopLikedAccom.mockReturnValue(
      { isLoading: true },
    );
    require("../../hooks/useMainListFetch").useFetchAccomWithParking.mockReturnValue(
      { isLoading: true },
    );
    require("../../hooks/useMainListFetch").useFetchAllAccommodations.mockReturnValue(
      { isLoading: true },
    );

    render(
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>,
    );

    expect(
      screen.getByText("숙소 정보를 불러오는 중입니다."),
    ).toBeInTheDocument();
  });

  test("에러가 발생한 경우 관련 에러 메시지를 출력한다", () => {
    require("../../hooks/useMainListFetch").useFetchTopLikedAccom.mockReturnValue(
      { error: true },
    );
    require("../../hooks/useMainListFetch").useFetchAccomWithParking.mockReturnValue(
      { error: true },
    );
    require("../../hooks/useMainListFetch").useFetchAllAccommodations.mockReturnValue(
      { error: true },
    );

    render(
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>,
    );

    expect(
      screen.getByText("숙소 정보를 불러오는 데 실패하였습니다."),
    ).toBeInTheDocument();
  });
});
