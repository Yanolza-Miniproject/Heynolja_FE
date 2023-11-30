import { render, screen } from "@testing-library/react";
import ProductImage from "./";

describe("ProductImage", () => {
  test("이미지가 랜더링 되는지 테스트", () => {
    const testImageUrl =
      "https://github.com/Yanolza-Miniproject/frontend/assets/92326949/2c0134f2-6ba3-434c-8dca-6d5831bf6e24";
    render(<ProductImage image={testImageUrl} />);

    const imageElement = screen.getByRole("img", {
      name: /accommodation 이미지/i,
    });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", testImageUrl);
    expect(imageElement).toHaveAttribute("alt", "accommodation 이미지");
  });
});
