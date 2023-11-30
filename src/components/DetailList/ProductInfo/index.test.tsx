import { render, screen } from "@testing-library/react";
import ProductInfo from "./";

describe("ProductInfo", () => {
  it("텍스트가 잘 랜더링 되는지 테스트", () => {
    const address = "경상남도 하동군 화개로 13";
    const infoDetail = "This is a detail for Accommodation1";
    const phoneNumber = "신라스테이";
    const homepage = "123-456-7890";
    const checkIn = "14:00:00";
    const checkOut = "11:00:00";

    render(
      <ProductInfo
        address={address}
        infoDetail={infoDetail}
        phoneNumber={phoneNumber}
        homepage={homepage}
        checkIn={checkIn}
        checkOut={checkOut}
      />,
    );

    expect(screen.getByText(address)).toBeInTheDocument();
    expect(screen.getByText(infoDetail)).toBeInTheDocument();
    expect(screen.getByText(phoneNumber)).toBeInTheDocument();
    expect(screen.getByText(homepage)).toBeInTheDocument();
    expect(screen.getByText(checkIn)).toBeInTheDocument();
    expect(screen.getByText(checkOut)).toBeInTheDocument();
  });
});
