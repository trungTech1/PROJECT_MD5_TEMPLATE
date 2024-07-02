import React from "react";

const Banner = () => {
  return (
    <section id="banner" style={{ background: "#F9F3EC" }}>
      <div className="container">
        <div className="swiper main-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide py-5">
              <div className="row banner-content align-items-center">
                <div className="img-wrapper col-md-5">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/banner-img.png?alt=media&token=f87e1644-596f-4686-a44a-bc07393689b6"
                    alt="banner-img"
                    className="img-fluid"
                  />
                </div>
                <div className="content-wrapper col-md-7 p-5 mb-5">
                  <div className="secondary-font text-primary text-uppercase mb-4">
                    Save 10 - 20 % off
                  </div>
                  <h2 className="banner-title display-1 fw-normal">
                    Best destination for{" "}
                    <span className="text-primary">your pets</span>
                  </h2>
                  <a
                    href="/shop"
                    className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                  >
                    shop now
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="mb-1"
                    >
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="swiper-slide py-5">
              <div className="row banner-content align-items-center">
                <div className="img-wrapper col-md-5">
                  <img
                    src="images/banner-img.png"
                    alt="banner-img"
                    className="img-fluid"
                  />
                </div>
                <div className="content-wrapper col-md-7 p-5 mb-5">
                  <div className="secondary-font text-primary text-uppercase mb-4">
                    Save 10 - 20 % off
                  </div>
                  <h2 className="banner-title display-1 fw-normal">
                    Best destination for{" "}
                    <span className="text-primary">your pets</span>
                  </h2>
                  <a
                    href="#"
                    className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                  >
                    shop now
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="mb-1"
                    >
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide py-5">
              <div className="row banner-content align-items-center">
                <div className="img-wrapper col-md-5">
                  <img
                    src="images/banner-img.png"
                    alt="banner-img"
                    className="img-fluid"
                  />
                </div>
                <div className="content-wrapper col-md-7 p-5 mb-5">
                  <div className="secondary-font text-primary text-uppercase mb-4">
                    Save 10 - 20 % off
                  </div>
                  <h2 className="banner-title display-1 fw-normal">
                    Best destination for{" "}
                    <span className="text-primary">your pets</span>
                  </h2>
                  <a
                    href="#"
                    className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
                  >
                    shop now
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="mb-1"
                    >
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <div className="swiper-pagination mb-5"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
