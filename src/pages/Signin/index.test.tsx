import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Signin from "./index";

describe("Signin", () => {
  it("컴포넌트 렌더링 테스트", () => {
    render(<Signin />);
  });

  it("아무것도 입력하지 않았을 때 에러 메시지 출력 테스트", async () => {
    render(<Signin />);

    userEvent.click(screen.getByRole("button", { name: "로그인" }));

    await waitFor(() => {
      expect(screen.getByText("이메일 형식이 아닙니다")).toBeInTheDocument();
      expect(screen.getByText("비밀번호는 8~20자리입니다")).toBeInTheDocument();
    });
  });

  it("이메일 형식에 123@naver.com을 입력했을 때 에러 메시지 미출력 테스트", async () => {
    render(<Signin />);

    await userEvent.type(
      screen.getByRole("textbox", { name: "email" }),
      "12345@naver.com",
    );
    await userEvent.click(screen.getByRole("button", { name: "로그인" }));

    await waitFor(() => {
      expect(
        screen.queryByText("이메일 형식이 아닙니다"),
      ).not.toBeInTheDocument();
      expect(screen.getByText("비밀번호는 8~20자리입니다")).toBeInTheDocument();
    });
  });

  it("비밀번호에 12345678을 입력했을 때 에러 메시지 미출력 테스트", async () => {
    render(<Signin />);

    await userEvent.type(screen.getByText("password"), "12345678");
    await userEvent.click(screen.getByRole("button", { name: "로그인" }));

    await waitFor(() => {
      expect(screen.getByText("이메일 형식이 아닙니다")).toBeInTheDocument();
      expect(
        screen.queryByText("비밀번호는 8~20자리입니다"),
      ).not.toBeInTheDocument();
    });
  });
});
