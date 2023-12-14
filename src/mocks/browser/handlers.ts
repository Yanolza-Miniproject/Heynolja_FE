import { http, HttpResponse } from "msw";
import { MockUpData } from "./constant";
import {
  cartList,
  orderData,
  roomDetail,
  paymentData,
} from "../../mock/myPageData";
import * as _ from "lodash";

// 전체 숙소 보기 + 필터링
export const handlers = [
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  http.get("/api/accommodations", ({ request }) => {
    const url = new URL(request.url);

    console.log(url);
    const page = Number(url.searchParams.get("page")) || 0;
    const typeParam = url.searchParams.get("type");
    const type =
      typeParam !== null && typeParam !== undefined ? Number(typeParam) : null;

    const regionParam = url.searchParams.get("region01");
    const region =
      regionParam !== null && regionParam !== undefined
        ? Number(regionParam)
        : null;

    const categoryParkingParam = url.searchParams.get("categoryParking");
    const categoryParking =
      categoryParkingParam !== null && categoryParkingParam !== undefined
        ? Number(categoryParkingParam)
        : null;

    const categoryCookingParam = url.searchParams.get("categoryCooking");
    const categoryCooking =
      categoryCookingParam !== null && categoryCookingParam !== undefined
        ? Number(categoryCookingParam)
        : null;

    const categoryPickupParam = url.searchParams.get("categoryPickup");
    const categoryPickup =
      categoryPickupParam !== null && categoryPickupParam !== undefined
        ? Number(categoryPickupParam)
        : null;

    const categoryData = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: any[], // 데이터 배열
      categoryParking: number | null,
      categoryCooking: number | null,
      categoryPickup: number | null,
    ) => {
      const filterData = _.filter(data, (item) => {
        return (
          (categoryParking ? item.categoryParking === categoryParking : true) &&
          (categoryCooking ? item.categoryCooking === categoryCooking : true) &&
          (categoryPickup ? item.categoryPickup === categoryPickup : true)
        );
      });

      return filterData;
    };

    const allCategoryData = categoryData(
      MockUpData,
      categoryParking,
      categoryCooking,
      categoryPickup,
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const regionData = (data: any[], region: number | null) => {
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
        case null:
          return data;

        default:
          return data;
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pagingData = (data: any[], type: number | null) => {
      if (type === null) {
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
      data: pagingData(regionData(allCategoryData, region), type),
    });
  }),

  // 주문, 장바구니 관련 api 요청
  // 상세 페이지에서 주문하기 눌러서 단일 상품 주문 요청
  http.post("/api/v1/rooms/:room_id/orders", async ({ request }) => {
    const newPost = (await request.json()) as {
      check_in_at: string;
      check_out_at: string;
      number_guests: number;
    };

    const data = {
      room_basket_id: 1,
      accommodation_name: "최고 호텔",
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

  // 장바구니에서 상품 선택 후 주문 주문 요청
  http.post("/api/v1/baskets/orders", async ({ request }) => {
    const newPost = (await request.json()) as {
      room_basket_id: number[];
    };

    // 처리할 로직 추가

    return HttpResponse.json({
      message: "성공",
      data: 2,
      id: newPost,
    });
  }),

  // 상품 장바구니에 담기
  http.post("/api/v1/rooms/:room_id", async ({ request }) => {
    const newPost = (await request.json()) as {
      check_in_at: string;
      check_out_at: string;
      number_guests: number;
    };

    const data = {
      room_basket_id: 1,
      accommodation_name: "최고 호텔",
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

  // 결제 생성 (결제하기 버튼 클릭할 때 요청)
  http.post("/api/v1/payments/:order_id", async ({ request, params }) => {
    const newPost = (await request.json()) as { payment_type: string };

    const { order_id } = params;

    const newData = orderData.filter((data) => data.order_id === ~~order_id)[0];

    const resData = {
      payment_id: 1,
      payment_type: newPost.payment_type,
      payment_at: new Date(),
      total_price: 300100,
      payment_status: "결제 완료",
      order_datas: newData.order_datas,
    };

    return HttpResponse.json({
      message: "성공",
      data: resData,
    });
  }),

  // 결제시 주문 취소 요청
  http.delete("/api/v1/orders/:order_id", () => {
    return HttpResponse.json({
      message: "주문 취소 성공",
    });
  }),

  // 장바구니 조회
  http.get("/api/v1/baskets", async () => {
    return HttpResponse.json({
      message: "성공",
      data: {
        basket_id: 1,
        total_price: 30000,
        total_Count: 5,
        rooms: cartList,
      },
    });
  }),

  // 주문 내역 조회 (아마 이후에 결제 완료 내역 조회로 수정 될 가능성 있음)
  http.get("/api/v1/orders", async () => {
    const newData = [...orderData[0].order_datas, ...orderData[1].order_datas];

    return HttpResponse.json({
      message: "성공",
      order_datas: newData,
    });
  }),

  // 결제 내역 전체 조회
  http.get("/api/v1/payment", async () => {
    return HttpResponse.json({
      message: "성공",
      data: paymentData,
    });
  }),

  // 주문 내역 상세 조회 (주문 번호로 조회할 수 있는 api)
  http.get("/api/v1/payment/:payment_id", async ({ params }) => {
    const { payment_id } = params;

    const newData = paymentData.filter(
      (item) => item.payment_id === ~~payment_id,
    );

    return HttpResponse.json({
      message: "성공",
      data: newData,
    });
  }),

  // 결제 내역 상세 조회 (주문 번호로 조회할 수 있는 api)
  http.get("/api/v1/orders/:order_id", async ({ params }) => {
    const { order_id } = params;

    const newData = orderData.filter((data) => data.order_id === ~~order_id)[0];

    return HttpResponse.json({
      message: "성공",
      order_datas: newData.order_datas,
    });
  }),

  // 장바구니 삭제 요청
  http.delete("/api/v1/baskets", async ({ request }) => {
    const delete_id = (await request.json()) as number;

    return HttpResponse.json({
      message: "성공",
      delete_id: delete_id,
    });
  }),

  // 숙소 상세정보에 관한 api요청
  // 숙소 id로 해당 숙소 상세정보 보기
  http.get("/api/v1/accommodations/:accommodation_id", async () => {
    // const { accommodation_id } = params;
    const resData = roomDetail;

    return HttpResponse.json({
      message: "성공",
      data: resData,
    });
  }),

  // 숙소에 포함된 방 id로 해당 방에 대한 정보 보기
  http.get("/api/v1/rooms/:room_id", async ({ params }) => {
    const { room_id } = params;

    const resData = roomDetail.rooms.filter((room) => room.id === ~~room_id);
    // const resData = roomDetail.rooms.find(
    //   (room) => room.id === Number(room_id),
    // );

    return HttpResponse.json({
      message: "성공",
      data: resData,
    });
  }),

  // 숙소 좋아요 버튼 눌렀을 때 요청
  http.post("/api/vi/wish/:accommodationId", () => {
    return HttpResponse.json({
      message: "좋아요 성공",
    });
  }),

  // 숙소 좋아요 취소 시 요청
  http.delete("/api/wish/:accommodationId", () => {
    return HttpResponse.json({
      message: "좋아요 취소",
    });
  }),

  // 숙소 좋아요 리스트 조회 (무작위로 1~40개의 데이터를 보내줌)
  http.get("/api/wish", ({ request }) => {
    const url = new URL(request.url);
    console.log(url);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const randomSizeData = (data: any[]) => {
      const randomData = _.sampleSize(data, _.random(1, 40));
      return randomData;
    };

    return HttpResponse.json({
      message: "좋아요 리스트 조회 성공",
      data: randomSizeData(MockUpData),
    });
  }),
];
