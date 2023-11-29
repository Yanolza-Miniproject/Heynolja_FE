// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import { RecoilRoot } from "recoil";
// import {
//   checkInDateState,
//   checkOutDateState,
// } from "../../../store/checkinCheckOutAtom.ts";
// import DateSelector from "./";

// jest.mock("recoil", () => ({
//   ...jest.requireActual("recoil"),
//   useRecoilValue: jest.fn().mockImplementation((state) => {
//     if (state === checkInDateState) {
//       return "2023-01-01";
//     } else if (state === checkOutDateState) {
//       return "2023-01-02";
//     }
//     return null;
//   }),
// }));

// describe("DateSelector", () => {
//   const mockOnClick = jest.fn();

//   it("renders the date selector with the correct date range and responds to click events", () => {
//     render(
//       <RecoilRoot>
//         <DateSelector onClick={mockOnClick} />
//       </RecoilRoot>,
//     );

//     // 날짜 범위가 정상적으로 표시되는지 확인
//     expect(screen.getByText("2023-01-01~2023-01-02")).toBeInTheDocument();

//     // 아이콘이 정상적으로 렌더링되는지 확인
//     expect(screen.getByAltText("calendar 아이콘")).toBeInTheDocument();
//     expect(screen.getByAltText("화살표 아이콘")).toBeInTheDocument();

//     // onClick 이벤트 핸들러가 호출되는지 확인
//     const button = screen.getByRole("button");
//     button.click();
//     expect(mockOnClick).toHaveBeenCalled();
//   });
// });
