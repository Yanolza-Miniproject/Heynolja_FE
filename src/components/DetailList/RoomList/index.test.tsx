// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import { RecoilRoot } from "recoil";
// import {
//   checkInDateState,
//   checkOutDateState,
// } from "../../../store/checkinCheckOutAtom";
// import RoomList from ".";

// // Recoil 상태를 모의 처리하기 위해 필요
// jest.mock("recoil", () => ({
//   ...jest.requireActual("recoil"),
//   useRecoilValue: jest.fn().mockImplementation((state) => {
//     if (state === checkInDateState) {
//       return new Date("2023-01-01"); // 예시 체크인 날짜
//     } else if (state === checkOutDateState) {
//       return new Date("2023-01-02"); // 예시 체크아웃 날짜
//     }
//     return null;
//   }),
// }));

// describe("RoomList", () => {
//   test("renders room list and filters rooms based on check-in and check-out dates", () => {
//     render(
//       <RecoilRoot>
//         <RoomList />
//       </RecoilRoot>,
//     );

//     // 방 목록이 올바르게 렌더링되는지 확인
//     expect(screen.getByTestId("room-list")).toBeInTheDocument();

//     // 체크인 및 체크아웃 날짜에 따라 필터링된 방의 수를 검증 (방의 수는 mock 데이터에 따라 달라질 수 있음)
//     // 예: expect(screen.getAllByTestId('room-item')).toHaveLength(예상되는 방의 수);
//   });

//   // 필요에 따라 추가적인 테스트 케이스를 작성할 수 있습니다.
// });
