import React from 'react'

const Banner2 = () => {
  return (
    <div>
       <section id="banner-2" className="my-3" style={{ background: "#F9F3EC" }}>
    <div className="container">
      <div className="row flex-row-reverse banner-content align-items-center">
        <div className="img-wrapper col-12 col-md-6">
          <img src="/src/assets/images/banner-img2.png" className="img-fluid"/>
        </div>
        <div className="content-wrapper col-12 offset-md-1 col-md-5 p-5">
          <div className="secondary-font text-primary text-uppercase mb-3 fs-4">Upto 40% off</div>
          <h2 className="banner-title display-1 fw-normal">Clearance sale !!!
          </h2>
          <a href="/shop" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
            shop now
            <svg width="24" height="24" viewBox="0 0 24 24" className="mb-1">
            </svg></a>
        </div>

      </div>
    </div>
  </section>

    </div>
  )
}

export default Banner2
