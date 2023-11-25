import { render } from "@testing-library/react";
import { createWrapper } from "../../../test/test.utils";
import CategoryItem from "./";

const testData = {
  id: String(53096),
  name: "비진도 바다이야기 펜션",
  address: "경상남도 통영시 한산면 외항길 78",
  phone_number: "055-642-6171",
  type: 4,
  like_count: 644,
  thumbnail_url:
    "https://res.cloudinary.com/dtf6uf7vi/image/upload/v1700183654/Home/testid.jpg",
  price: 488,
  likes_available: true,
  category_parking: 1,
  category_cooking: 1,
  category_pickup: 1,
  view_count: 707,
  check_in: "18:00",
  check_out: "12:00",
  room_counts: 8,
};

describe("CategoryItem Test", () => {
  {
    test("CategoryItem", () => {
      if ("IntersectionObserver" in window) {
        const wrapper = createWrapper();
        render(<CategoryItem data={testData} />, { wrapper });
      }
    });
  }
});