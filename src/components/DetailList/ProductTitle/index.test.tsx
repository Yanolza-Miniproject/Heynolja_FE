import { render, screen } from "@testing-library/react";
import ProductTitle from "./";

describe("ProductTitle", () => {
  test("텍스트가 랜더링 테스트", () => {
    const type = 0;
    const name = "신라스테이";
    render(<ProductTitle type={type} name={name} />);

    expect(screen.getByText("호텔")).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
