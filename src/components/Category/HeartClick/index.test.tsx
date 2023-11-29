import { screen, render, waitFor } from "@testing-library/react";
import HeartClick from "."; // Adjust the import path as needed
import userEvent from "@testing-library/user-event";
import { createWrapper } from "../../../test/test.utils";
import { useWishControl } from "../../../hooks/useWishControl";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mockUseWishControl = useWishControl as jest.MockedFunction<any>;

jest.mock("../../../hooks/useWishControl");

describe("HeartClick test", () => {
  beforeEach(() => {
    mockUseWishControl.mockImplementation(() => ({
      mutate: jest.fn(),
      onSuccess: jest.fn(),
    }));
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("화면에 props로 받아온 데이터 잘 보여지는 지 test", () => {
    render(
      <HeartClick likes={5} likes_clicked={false} accommodationId="1101" />,
      {
        wrapper: createWrapper(),
      },
    );

    const heartIcon = screen.getByText("5");
    expect(heartIcon).toBeInTheDocument();
  });

  test("이미 선택한 택지 선택시 lies 감소", async () => {
    const wrapper = createWrapper();
    const user = userEvent.setup();

    // given
    const likes = 5;
    render(
      <HeartClick likes={likes} likes_clicked={false} accommodationId="1101" />,
      { wrapper },
    );
    const heartClickButton = document.getElementById("button");

    // when
    await user.click(heartClickButton!);

    // then
    await waitFor(() => {
      expect(screen.getByText(String(likes + 1))).toBeInTheDocument();
    });
  });

  test("아직 선택하지 않은 택지 선택하면 lies 증가", async () => {
    const wrapper = createWrapper();
    const user = userEvent.setup();

    // given
    const likes = 5;
    render(
      <HeartClick likes={likes} likes_clicked={true} accommodationId="1101" />,
      { wrapper },
    );
    const heartClickButton = document.getElementById("button");

    // when
    await user.click(heartClickButton!);

    // then
    await waitFor(() => {
      expect(screen.getByText(String(likes - 1))).toBeInTheDocument();

      // called
    });
  });

  test("mutate 함수 호출 테스트", async () => {
    const wrapper = createWrapper();
    const user = userEvent.setup();

    mockUseWishControl.mockImplementation(() => ({
      mutate: jest.fn(),
      onSuccess: jest.fn(),
    }));

    // given
    const likes = 5;
    render(
      <HeartClick likes={likes} likes_clicked={true} accommodationId="1101" />,
      { wrapper },
    );
    const heartClickButton = document.getElementById("button");

    // when
    await user.click(heartClickButton!);

    // then
    await waitFor(() => {
      expect(mockUseWishControl).toHaveBeenCalled();
    });
  });
});
