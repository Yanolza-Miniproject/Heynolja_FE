import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Signup from "./index";

describe("Signup", () => {
  it("컴포넌트 렌더링 테스트", () => {
    render(<Signup />);
  });

  it("아무것도 입력하지 않았을 때 에러 메시지 출력 테스트", async () => {
    render(<Signup />);

    userEvent.click(screen.getByRole("button", { name: "회원가입" }));

    await waitFor(() => {
      expect(screen.getByText("이메일 형식이 아닙니다")).toBeInTheDocument();
      expect(screen.getByText("비밀번호는 8~20자리입니다")).toBeInTheDocument();
      expect(screen.getByText("닉네임은 2~10자리입니다")).toBeInTheDocument();
      expect(
        screen.getByText("전화번호는 10~11자리입니다"),
      ).toBeInTheDocument();
    });
  });
});
