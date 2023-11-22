import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart";
import Complete from "./pages/Complete";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import MyOrder from "./pages/MyPage/MyOrder";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Layout from "./components/Common/Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "signin", element: <Signin /> },
      { path: "signup", element: <Signup /> },
      { path: "detail", element: <Detail /> },
      { path: "cart", element: <Cart /> },
      { path: "payment", element: <Payment /> },
      { path: "complete", element: <Complete /> },
      { path: "mypage", element: <MyPage /> },
      { path: "mypage/myorder", element: <MyOrder /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
