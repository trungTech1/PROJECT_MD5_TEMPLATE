import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/papes/user/home/home";
import Homepapes from "@/papes/user/home/papes/homepapes/Homepapes";
import Shop from "@/papes/user/shop/index";
import Authen from "@/papes/user/home/papes/authen/index";
import Cart from "@/papes/user/cart/index";
import Checkout from "@/papes/user/checkout/Checkout";
import Productdetail from "@/papes/user/detail/Productdetail";

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Homepapes />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/authen" element={<Authen />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<Productdetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RootRoutes;
