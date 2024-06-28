import React from "react";
import "./homePapes.scss";
import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import Clothings from "./components/clothings/Clothings";

const Homepapes = () => {
  return (
    <div className="home-papes">
      <Banner />
      <Categories />
      <Clothings />
    </div>
  );
};

export default Homepapes;
