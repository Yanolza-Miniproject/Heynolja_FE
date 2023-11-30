import { render } from "@testing-library/react";
import ProductDetails from "./";

const testData = { roomName: "디럭스룸", name: "그랜드하얏트제주" };

describe("ProductDetails 테스트", () => {
  test("객실 이름과 숙소 이름 표시", () => {
    const { getByText } = render(
      <ProductDetails roomName={testData.roomName} name={testData.name} />,
    );

    expect(getByText(testData.name)).toBeInTheDocument();
    expect(getByText(testData.roomName)).toBeInTheDocument();
  });
});
