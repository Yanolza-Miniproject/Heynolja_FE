import { http, HttpResponse } from "msw";
import { MockUpData } from "./constant";

export const handlers = [
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  http.get("/api/v1/listitems", ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 0;
    const limit = 20;
    const startIndex = page * limit;
    const endIndex = startIndex + limit;
    const viewData = MockUpData.slice(startIndex, endIndex);
    return HttpResponse.json(viewData);
  }),
];
