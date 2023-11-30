import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createWrapper } from "../../../test/test.utils";
import RoomItem from "./";

const testData = {
  id: 1,
  name: "그랜드하얏트",
  price: 100000,
  capacity: 2,
  roomImageUrl: "test-room-image.jpg",
  RoomInventory: [{ date: "2023-05-01", inventory: 5 }],
  checkInDate: new Date("2023-05-01"),
  checkOutDate: new Date("2023-05-02"),
  roomImages: "test-room-image.jpg",
};

describe("RoomItem Test", () => {
  test("객실 아이템이 렌더링되는지 테스트", () => {
    if ("IntersectionObserver" in window) {
      render(
        <RoomItem
          id={testData.id}
          name={testData.name}
          price={testData.price}
          capacity={testData.capacity}
          roomImages={testData.roomImages}
          RoomInventory={testData.RoomInventory}
          checkInDate={testData.checkInDate}
          checkOutDate={testData.checkOutDate}
        />,
      );
    }
  });

  test("객실 리스트 아이템을 누르면 해당 객실 상세페이지로 이동.", () => {
    if ("IntersectionObserver" in window) {
      const router = jest.fn();
      const user = userEvent.setup();
      const wrapper = createWrapper();

      render(
        <RoomItem
          id={testData.id}
          name={testData.name}
          price={testData.price}
          capacity={testData.capacity}
          roomImages={testData.roomImages}
          RoomInventory={testData.RoomInventory}
          checkInDate={testData.checkInDate}
          checkOutDate={testData.checkOutDate}
        />,
        { wrapper },
      );

      const item = screen.getByTestId("individual-item");
      user.click(item);

      expect(router).toHaveBeenCalledWith(testData.id);
    }
  });
});
