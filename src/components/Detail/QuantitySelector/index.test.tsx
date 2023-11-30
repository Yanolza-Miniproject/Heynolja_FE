import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import QuantitySelector from "./";

describe("QuantitySelector 테스트", () => {
  const mockOnQuantityChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("랜더링 되는지 테스트", () => {
    render(
      <QuantitySelector
        initialQuantity={1}
        onQuantityChange={mockOnQuantityChange}
        capacity={5}
      />,
    );
    expect(screen.getByText("최대 5명")).toBeInTheDocument();
  });

  test("플러스 버튼 클릭시 수량이 증가한다", () => {
    render(
      <QuantitySelector
        initialQuantity={1}
        onQuantityChange={mockOnQuantityChange}
        capacity={5}
      />,
    );
    fireEvent.click(screen.getByText("+"));
    expect(mockOnQuantityChange).toHaveBeenCalledWith(2);
  });

  test("마이너스 버튼 클릭시 수량이 감소한다.", () => {
    render(
      <QuantitySelector
        initialQuantity={2}
        onQuantityChange={mockOnQuantityChange}
        capacity={5}
      />,
    );
    fireEvent.click(screen.getByText("-"));
    expect(mockOnQuantityChange).toHaveBeenCalledWith(1);
  });

  test("1미만이면 감소할 수 없다.", () => {
    render(
      <QuantitySelector
        initialQuantity={1}
        onQuantityChange={mockOnQuantityChange}
        capacity={5}
      />,
    );
    fireEvent.click(screen.getByText("-"));
    expect(mockOnQuantityChange).not.toHaveBeenCalledWith(0);
  });

  test("최대 인원을 초과하여 증가하지 않는다.", () => {
    render(
      <QuantitySelector
        initialQuantity={5}
        onQuantityChange={mockOnQuantityChange}
        capacity={5}
      />,
    );
    fireEvent.click(screen.getByText("+"));
    expect(mockOnQuantityChange).not.toHaveBeenCalledWith(6);
  });
});
