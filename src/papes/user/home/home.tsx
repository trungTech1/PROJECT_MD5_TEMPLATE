import React from "react";
import "./home.scss";
import Headers from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { Outlet } from "react-router-dom";

const home = () => {
  return (
    <div className="home">
      <Headers />
      <Outlet />
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default home;
