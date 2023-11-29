// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import RoomItem from "./";
// import formatNumber from "../../../utils/formatNumber";

// const testData = {
//   id: 1,
//   name: "디럭스룸",
//   price: 200000,
//   capacity: 2,
//   roomImageUrl: "example-room-image.jpg",
//   RoomInventory: [{ date: "2023-01-01", inventory: 5 }],
//   checkInDate: new Date("2023-01-01"),
//   checkOutDate: new Date("2023-01-02"),
// };

// describe("RoomItem", () => {
//   test("아이템의 정보가 데이터에 맞게 표시되어야 한다.", () => {
//     render(<RoomItem {...testData} />);

//     const name = screen.getByText(testData.name);
//     const capacity = screen.getByText(`최대 인원: ${testData.capacity}명`);
//     const price = screen.getByText(`₩${formatNumber(testData.price)}`);
//     const inventoryText = `남은 객실: ${testData.RoomInventory[0].inventory}개`;
//     const inventory = screen.getByText((content) =>
//       content.includes(inventoryText),
//     );
//     expect(inventory).toBeInTheDocument();
//     const roomImage = screen.getByAltText(`${testData.name} 이미지`);

//     expect(name).toBeInTheDocument();
//     expect(capacity).toBeInTheDocument();
//     expect(price).toBeInTheDocument();
//     expect(inventory).toBeInTheDocument();
//     expect(roomImage).toHaveAttribute("src", testData.roomImageUrl);
//   });
// });
