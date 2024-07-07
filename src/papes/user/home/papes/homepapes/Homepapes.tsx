import React from "react";
import "./homePapes.scss";
import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import Clothings from "./components/clothings/Clothings";
import Foodies from "./components/foodies";
// import Banner2 from "./components/banner2/Banner2";
// import Testimonial from "./components/testimonial/Testimonial";
import Bestselling from "./components/bestselling/Bestselling";

const Homepapes = () => {
  return (
    <div className="home-papes">
      <Banner />
      <Categories />
      <Clothings />
      <Foodies />
      {/* <Banner2 /> */}
      {/* <Testimonial /> */}
      <Bestselling />
    </div>
  );
};

export default Homepapes;
