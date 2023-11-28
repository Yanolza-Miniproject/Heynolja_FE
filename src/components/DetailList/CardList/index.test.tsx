import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CardList from "./";

describe("CardList", () => {
  it("카드가 텍스트를 랜더링하고 상태에 따라 다른 스타일을 적용한다.", () => {
    render(<CardList parking={true} cooking={false} pickup={true} />);

    expect(screen.getByText("주차 가능해요")).toBeInTheDocument();
    expect(screen.getByText("취사가 가능해요")).toBeInTheDocument();
    expect(screen.getByText("픽업 서비스가 있어요")).toBeInTheDocument();

    const parkingIcon = screen.getByAltText("parking-icon");
    expect(parkingIcon).toHaveStyle("filter: none");

    const cookingIcon = screen.getByAltText("cooking-icon");
    expect(cookingIcon).toHaveStyle("filter: grayscale(100%)");

    const pickupIcon = screen.getByAltText("pickup-icon");
    expect(pickupIcon).toHaveStyle("filter: none");
  });
});
