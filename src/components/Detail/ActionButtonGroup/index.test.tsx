import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ActionButtonGroup from "./";

const RoomDetail = {
  id: 1,
  accommodation_name: "Test Accommodation",
  room_name: "Test Room",
  price: 100,
  stock: 5,
  room_image_url: ["url1", "url2"],
};

const CheckInAt = "2023-01-01";
const CheckOutAt = "2023-01-03";
const NumberGuests = 2;
const OnAddToCart = jest.fn();
const HandleBuyNow = jest.fn();

describe("ActionButtonGroup 테스트", () => {
  test("렌더링 및 버튼 활성화 테스트", () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <MemoryRouter>
            <ActionButtonGroup
              checkInAt={CheckInAt}
              checkOutAt={CheckOutAt}
              roomDetail={RoomDetail}
              onAddToCart={OnAddToCart}
              handleBuyNow={HandleBuyNow}
              numberGuests={NumberGuests}
            />
          </MemoryRouter>
        </RecoilRoot>
      </QueryClientProvider>,
    );
  });
});
