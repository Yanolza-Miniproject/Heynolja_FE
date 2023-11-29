import { render, screen } from "@testing-library/react";
import ProductTitle from "./";

describe("ProductTitled", () => {
  it("텍스트가 잘 랜더링 되는지 테스트", () => {
    const type = "호텔";
    const name = "신라스테이";
    render(<ProductTitle type={type} name={name} />);

    expect(screen.getByText(type)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
