import React, { useState } from "react";
import "./home.scss";
import Headers from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./papes/authen/authen";

const home = () => {
    return (
      <AuthProvider>
    <div className="home">
      <Headers />
      <Outlet  
       />
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
    </AuthProvider>
  );
};

export default home;
