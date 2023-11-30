import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import PriceDisplay from "./";
import {
  checkInDateState,
  checkOutDateState,
} from "../../../store/checkinCheckOutAtom";
import calculateNightCount from "../../../utils/calculateNightCount";
import formatNumber from "../../../utils/formatNumber";

describe("PriceDisplay Component", () => {
  const mockPricePerNight = 100000;
  const mockCheckInDate = new Date("2023-01-01");
  const mockCheckOutDate = new Date("2023-01-03");

  const setup = () => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(checkInDateState, mockCheckInDate);
          set(checkOutDateState, mockCheckOutDate);
        }}
      >
        <PriceDisplay pricePerNight={mockPricePerNight} />
      </RecoilRoot>,
    );
  };

  test("총합 가격이 올바르게 계산되어 표시되는지 테스트", () => {
    setup();

    const nightCount = calculateNightCount(
      mockCheckInDate.toISOString(),
      mockCheckOutDate.toISOString(),
    );
    const expectedTotalPrice = nightCount * mockPricePerNight;

    expect(
      screen.getByText(`￦ ${formatNumber(expectedTotalPrice)}`),
    ).toBeInTheDocument();
  });
});
