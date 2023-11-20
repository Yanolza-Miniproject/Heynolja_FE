import { Route, Routes } from "react-router-dom";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import Cart from "./pages/Cart";
import Complete from "./pages/Complete";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Payment from "./pages/Payment";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail/" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
