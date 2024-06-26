import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/papes/home/home.tsx";
import Homepapes from "@/papes/home/papes/homepapes/Homepapes";

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Homepapes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RootRoutes;
