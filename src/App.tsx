import React, { ComponentType, Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Common/Layout";
import { Global } from "@emotion/react";
import { globalStyle } from "./components/Common/Common.styles";
import { Loader } from "./components/Common/Loader";
const Cart = lazy(() => import("./pages/Cart"));
const Complete = lazy(() => import("./pages/Complete"));
const Detail = lazy(() => import("./pages/Detail"));
const Main = lazy(() => import("./pages/Main"));
const MyPage = lazy(() => import("./pages/MyPage"));
const MyOrder = lazy(() => import("./pages/MyPage/MyOrder"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Payment = lazy(() => import("./pages/Payment"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));
const Category = lazy(() => import("./pages/Category"));
const Search = lazy(() => import("./pages/Search"));
const SearchList = lazy(() => import("./pages/SearchList"));
const MyWishs = lazy(() => import("./pages/MyPage/MyWishs"));
const DetailList = lazy(() => import("./pages/DetailList"));

const createRoute = (path: string, component: ComponentType) => ({
  path,
  element: (
    <Suspense fallback={<Loader />}>{React.createElement(component)}</Suspense>
  ),
});

const routes = [
  createRoute("/", Main),
  createRoute("signin", Signin),
  createRoute("signup", Signup),
  createRoute("detail", Detail),
  createRoute("detailList", DetailList),
  createRoute("cart", Cart),
  createRoute("payment", Payment),
  createRoute("complete/:id", Complete),
  createRoute("mypage", MyPage),
  createRoute("category", Category),
  createRoute("mypage/myorder", MyOrder),
  createRoute("search", Search),
  createRoute("mypage/mywish", MyWishs),
  createRoute("results", SearchList),
  createRoute("*", NotFound),
];

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: routes,
  },
]);

function App() {
  return (
    <>
      <Loader />
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
