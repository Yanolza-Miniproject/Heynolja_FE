import { http, HttpResponse } from "msw";
import { MockUpData } from "./constant";
import { cartData, cartList, orderData } from "../../mock/myPageData";
import * as _ from "lodash";

export const handlers = [
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  http.get("/api/v1/accommodations", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 0;
    const type = Number(url.searchParams.get("type")) || 0;
    const region = Number(url.searchParams.get("region")) || 0;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const regionData = (data: any[], region: number) => {
      switch (region) {
        case 0:
          return _.filter(data, (item) => {
            return item.address.includes("서울");
          });
        case 1:
          return _.filter(data, (item) => {
            return item.address.includes("경기");
          });
        case 2:
          return _.filter(data, (item) => {
            return item.address.includes("강원");
          });
        case 3:
          return _.filter(data, (item) => {
            return item.address.includes("충청");
          });
        case 4:
          return _.filter(data, (item) => {
            return item.address.includes("전라");
          });
        case 5:
          return _.filter(data, (item) => {
            return item.address.includes("경상");
          });
        case 6:
          return _.filter(data, (item) => {
            return item.address.includes("제주");
          });
        default:
          return data;
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pagingData = (data: any[], type: number) => {
      if (type === 99) {
        const filterData = data;
        const limit = 20;
        const startIndex = page * limit;
        const endIndex = startIndex + limit;
        const viewData = filterData.slice(startIndex, endIndex);
        return viewData;
      }

      const filterData = _.filter(data, (item) => {
        return item.type === type;
      });
      const limit = 20;
      const startIndex = page * limit;
      const endIndex = startIndex + limit;
      const viewData = filterData.slice(startIndex, endIndex);
      return viewData;
    };

    return HttpResponse.json({
      message: "성공",
      data: pagingData(regionData(MockUpData, region), type),
    });
  }),

  // 주문 관련 post 요청
  http.post("/api/v1/rooms/:room_id/orders", async ({ request }) => {
    const newPost = (await request.json()) as {
      check_in_at: string;
      check_out_at: string;
      number_guests: number;
    };

    const data = {
      room_basket_id: 1,
      accommdation_name: "최고 호텔",
      room_name: "스위트룸",
      price: 40000,
      number_guests: newPost.number_guests,
      check_in_at: newPost.check_in_at,
      check_out_at: newPost.check_out_at,
    };

    return HttpResponse.json({
      message: "성공",
      order_id: 1,
      data: data,
    });
  }),

  http.post("/api/v1/baskets/orders", async () => {
    const data = [cartData[1], cartData[2]];

    return HttpResponse.json({
      message: "성공",
      order_id: 2,
      data: data,
    });
  }),

  http.post("/api/v1/rooms/:room_id", async ({ request }) => {
    const newPost = (await request.json()) as {
      check_in_at: string;
      check_out_at: string;
      number_guests: number;
    };

    const data = {
      room_basket_id: 1,
      accommdation_name: "최고 호텔",
      room_name: "스위트룸",
      price: 40000,
      number_guests: newPost.number_guests,
      check_in_at: newPost.check_in_at,
      check_out_at: newPost.check_out_at,
    };

    return HttpResponse.json({
      message: "성공",
      data: data,
    });
  }),

  http.get("/api/v1/baskets", async () => {
    return HttpResponse.json({
      message: "성공",
      basket_id: 1,
      order_datas: cartList,
    });
  }),

  http.get("/api/v1/orders/:order_id", async ({ params }) => {
    const { order_id } = params;
    const newData = orderData.filter((data) => data.order_id === ~~order_id)[0];
    return HttpResponse.json({
      message: "성공",
      order_datas: newData.order_datas,
    });
  }),
];

//region=${region}&page=${pageParam}&type=${type}
