import { http, HttpResponse } from "msw";
import { MockUpData } from "./constant";
import * as _ from "lodash";

export const handlers = [
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  http.get("/api/v1/accommodations", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 0;
    const type = Number(url.searchParams.get("type")) || 0;

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
      data: pagingData(MockUpData, type),
    });
  }),
];

//region=${region}&page=${pageParam}&type=${type}
