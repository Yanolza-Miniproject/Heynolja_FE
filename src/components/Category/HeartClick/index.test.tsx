import { screen, render, waitFor } from "@testing-library/react";
import HeartClick from "."; // Adjust the import path as needed
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("HeartClick test", () => {
  test("화면에 props로 받아온 데이터 잘 보여지는 지 test", () => {
    render(<HeartClick likes={5} likes_clicked={false} />, {
      wrapper: createWrapper(),
    });

    const heartIcon = screen.getByText("5");
    expect(heartIcon).toBeInTheDocument();
  });

  test("클릭 시, useWishControl hook이 잘 작동하는 지 test", async () => {
    const wrapper = createWrapper();
    const user = userEvent.setup();

    // given
    const likes = 5;
    render(<HeartClick likes={likes} likes_clicked={false} />, { wrapper });
    const heartClickButton = document.getElementById("button");

    // when
    await user.click(heartClickButton!);

    // then
    await waitFor(() => {
      expect(screen.getByText(String(likes - 1))).toBeInTheDocument();
    });
  });
});
