import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
import { Checkout } from "./routes/checkout/checkout.component";
import { useDispatch } from "react-redux";
import {GlobalStyle} from "./global.styles";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import { useEffect } from "react";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [])
  return (
  <>
    <GlobalStyle />
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  </>
  );
};

export default App;
