import { render, screen } from "@testing-library/react";
import CompleteMessage from ".";
import formatNumber from "../../../utils/formatNumber";
import { leftDateUntilTheTrip } from "./CompleteMessage.utils";

const testData = {
  payment_id: 1,
  total_price: 30000,
  total_count: 2,
  payment_at: "2023-11-25T12:00:01",
  rooms: [
    {
      id: 1,
      accommodationName: "부산 앙코르 호텔",
      roomName: "스위트룸",
      price: 300000,
      numberOfGuests: 2,
      checkInAt: "2023-12-25",
      checkOutAt: "2023-12-26",
      roomUrl: "",
    },
    {
      id: 2,
      accommodationName: "신라민박",
      roomName: "거지존",
      price: 100,
      numberOfGuests: 1,
      checkInAt: "2023-12-25",
      checkOutAt: "2023-12-26",
      roomUrl: "",
    },
  ],
};

describe("결제 완료 정보 컴포넌트 테스트", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test("첫 번째 여행까지의 남은 일수가 화면에 정확히 표시되어야 한다.", () => {
    render(
      <CompleteMessage
        data={testData.rooms}
        totalPrice={testData.total_price}
      />,
    );

    const dayElement = screen.getByTestId("day").innerHTML;

    expect(dayElement).toBe(leftDateUntilTheTrip(testData.rooms) + "일");
  });

  test("총 결제 금액이 화면에 정확이 표시되어야 한다.", () => {
    render(
      <CompleteMessage
        data={testData.rooms}
        totalPrice={testData.total_price}
      />,
    );

    const priceElement = screen.queryByText(
      `${formatNumber(testData.total_price)}원`,
    );

    expect(priceElement).toBeInTheDocument();
  });
});
