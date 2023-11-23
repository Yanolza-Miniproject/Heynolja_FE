import { http, HttpResponse } from "msw";
import { MockUpData } from "./constant";
import * as _ from "lodash";

export const handlers = [
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  http.get("/api/v1/accommodations", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 0;
    const typeParam = url.searchParams.get("type");
    const type =
      typeParam !== null && typeParam !== undefined ? Number(typeParam) : null;

    const regionParam = url.searchParams.get("region");
    const region =
      regionParam !== null && regionParam !== undefined
        ? Number(regionParam)
        : null;

    const categoryParkingParam = url.searchParams.get("category_parking");
    const category_parking =
      categoryParkingParam !== null && categoryParkingParam !== undefined
        ? Number(categoryParkingParam)
        : null;

    const categoryCookingParam = url.searchParams.get("category_cooking");
    const category_cooking =
      categoryCookingParam !== null && categoryCookingParam !== undefined
        ? Number(categoryCookingParam)
        : null;

    const categoryPickupParam = url.searchParams.get("category_pickup");
    const category_pickup =
      categoryPickupParam !== null && categoryPickupParam !== undefined
        ? Number(categoryPickupParam)
        : null;

    const categoryData = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: any[], // 데이터 배열
      category_parking: number | null,
      category_cooking: number | null,
      category_pickup: number | null,
    ) => {
      const filterData = _.filter(data, (item) => {
        return (
          (category_parking
            ? item.category_parking === category_parking
            : true) &&
          (category_cooking
            ? item.category_cooking === category_cooking
            : true) &&
          (category_pickup ? item.category_pickup === category_pickup : true)
        );
      });

      return filterData;
    };

    const allCategoryData = categoryData(
      MockUpData,
      category_parking,
      category_cooking,
      category_pickup,
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
];
