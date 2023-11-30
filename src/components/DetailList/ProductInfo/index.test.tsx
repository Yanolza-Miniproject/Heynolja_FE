import { render, screen } from "@testing-library/react";
import ProductInfo from "./";

const testData = {
  address: "경상남도 하동군 화개로 13",
  infoDetail: "This is a detail for Accommodation1",
  phoneNumber: "신라스테이",
  homepage: "123-456-7890",
  checkIn: "14:00:00",
  checkOut: "11:00:00",
};

describe("ProductInfo", () => {
  test("텍스트가 잘 랜더링 되는지 테스트", () => {
    render(
      <ProductInfo
        address={testData.address}
        infoDetail={testData.infoDetail}
        phoneNumber={testData.phoneNumber}
        homepage={testData.homepage}
        checkIn={testData.checkIn}
        checkOut={testData.checkOut}
      />,
    );

    expect(screen.getByText(testData.address)).toBeInTheDocument();
    expect(screen.getByText(testData.infoDetail)).toBeInTheDocument();
    expect(screen.getByText(testData.phoneNumber)).toBeInTheDocument();
    expect(screen.getByText(testData.homepage)).toBeInTheDocument();
    expect(screen.getByText(testData.checkIn)).toBeInTheDocument();
    expect(screen.getByText(testData.checkOut)).toBeInTheDocument();
  });
});
