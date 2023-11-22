import { http, HttpResponse } from "msw";
import { MockUpData } from "./constant";
import * as _ from "lodash";

export const handlers = [
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  http.get("/api/v1/accommodations", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 0;
    const location = url.searchParams.get("region-name") || "";

    const dataIncludeLocation = _.filter(MockUpData, (item) => {
      return item.address.startsWith(location);
    });
    const limit = 20;
    const startIndex = page * limit;
    const endIndex = startIndex + limit;
    const viewData = dataIncludeLocation.slice(startIndex, endIndex);

    return HttpResponse.json({
      message: "성공",
      data: viewData,
    });
  }),
];
