import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import RoomList from "./";
import isInventoryAvailable from "./RoomList.utils";
import { BrowserRouter } from "react-router-dom";

const accommodationDetail = {
  rooms: [
    {
      id: 1,
      name: "스탠다드 룸",
      price: 150000,
      capacity: 2,
      roomImages: [
        { id: 101, imageUrl: "image1.jpg" },
        { id: 102, imageUrl: "image2.jpg" },
      ],
      RoomInventory: [
        { date: "2023-01-01", inventory: 5 },
        { date: "2023-01-02", inventory: 4 },
      ],
      roomImageUrl: "standard-room.jpg",
    },
  ],
};
describe("RoomList Test", () => {
  test("필터링된 룸 리스트가 렌더링되는지 테스트", () => {
    const testCheckInDate = new Date("2023-01-01");
    const testCheckOutDate = new Date("2023-01-02");

    render(
      <BrowserRouter>
        <RecoilRoot>
          <RoomList rooms={accommodationDetail.rooms} />
        </RecoilRoot>
      </BrowserRouter>,
    );

    accommodationDetail.rooms.forEach((room) => {
      if (isInventoryAvailable(room, testCheckInDate, testCheckOutDate)) {
        expect(screen.getByText(room.name)).toBeInTheDocument();
      } else {
        expect(screen.queryByText(room.name)).toBeNull();
      }
    });
  });
});
