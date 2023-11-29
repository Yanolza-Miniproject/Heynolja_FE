import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Signup from "./index";
import { createWrapper } from "../../test/test.utils";

describe("Signup", () => {
  it("컴포넌트 렌더링 테스트", () => {
    const wrapper = createWrapper();
    render(<Signup />, { wrapper });
  });

  it("아무것도 입력하지 않았을 때 에러 메시지 출력 테스트", async () => {
    const wrapper = createWrapper();
    render(<Signup />, { wrapper });

    userEvent.click(screen.getByRole("button", { name: "회원가입" }));

    await waitFor(() => {
      expect(screen.getByText("이메일 형식이 아닙니다")).toBeInTheDocument();
      expect(screen.getByText("비밀번호는 8~20자리입니다")).toBeInTheDocument();
      expect(screen.getByText("닉네임은 2~10자리입니다")).toBeInTheDocument();
      expect(screen.getByText("전화번호 형식이 아닙니다")).toBeInTheDocument();
    });
  });

  it("이메일 형식을 입력하면 에러 메시지가 사라지는지 테스트", async () => {
    const wrapper = createWrapper();
    render(<Signup />, { wrapper });

    userEvent.type(
      screen.getByRole("textbox", { name: "email" }),
      "kim@naver.com",
    );
    userEvent.click(screen.getByRole("button", { name: "회원가입" }));

    await waitFor(() => {
      expect(
        screen.queryByText("이메일 형식이 아닙니다"),
      ).not.toBeInTheDocument();
      expect(screen.getByText("비밀번호는 8~20자리입니다")).toBeInTheDocument();
    });
  });

  it("모든 입력값을 입력하면 에러 메시지가 사라지는지 테스트", async () => {
    const wrapper = createWrapper();
    render(<Signup />, { wrapper });

    userEvent.type(
      screen.getByRole("textbox", { name: "email" }),
      "kim@gmail.com",
    );
    userEvent.type(screen.getByText("password"), "12345678");
    userEvent.type(screen.getByText("nickname"), "kim");
    userEvent.type(screen.getByText("phone"), "010-1234-5678");
    userEvent.click(screen.getByRole("button", { name: "회원가입" }));

    await waitFor(() => {
      expect(
        screen.queryByText("이메일 형식이 아닙니다"),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("비밀번호는 8~20자리입니다"),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("닉네임은 2~10자리입니다"),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("전화번호 형식이 아닙니다"),
      ).not.toBeInTheDocument();
    });
  });
});
