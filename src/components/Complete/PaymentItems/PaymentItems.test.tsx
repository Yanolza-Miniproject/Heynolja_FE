import { render, screen } from "@testing-library/react";
import PaymentItems from ".";

const testData = {
  payment_id: 1,
  total_price: 30000,
  total_count: 2,
  payment_at: "2023-11-25T12:00:01",
  rooms: [
    {
      room_basket_id: 1,
      accommodation_name: "부산 앙코르 호텔",
      room_name: "스위트룸",
      price: 300000,
      number_guests: 2,
      check_in_at: "2023-12-25",
      check_out_at: "2023-12-26",
      room_image_url: [""],
    },
    {
      room_basket_id: 2,
      accommodation_name: "신라민박",
      room_name: "거지존",
      price: 100,
      number_guests: 1,
      check_in_at: "2023-12-25",
      check_out_at: "2023-12-26",
      room_image_url: [""],
    },
  ],
};

describe("결제 완료 정보 컴포넌트 테스트", () => {
  test("결제 항목의 리스트 개수가 알맞게 화면에 표시되어야 한다..", () => {
    render(<PaymentItems data={testData.rooms} />);

    const listElement = screen.getAllByTestId("payment_list");

    expect(listElement.length).toBe(testData.rooms.length);
  });
});
