import React from 'react'
import "./productdetail.scss"
const Productdetail = () => {
  return (
    <div>
       <section id="banner" className="py-3" style={{background:"#F9F3EC;"}}>
    <div className="container">
      <div className="hero-content py-5 my-3">
        <h2 className="display-1 mt-3 mb-0">Single <span className="text-primary">Product</span></h2>
        <nav className="breadcrumb">
          <a className="breadcrumb-item nav-link" href="#">Home</a>
          <a className="breadcrumb-item nav-link" href="#">Pages</a>
          <span className="breadcrumb-item active" aria-current="page">Single-Product</span>
        </nav>
      </div>
    </div>
  </section>

  <section id="selling-product">
    <div className="container my-md-5 py-5">
      <div className="row g-md-5">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-md-12">
              {/* <!-- product-large-slider --> */}
              <div className="swiper product-large-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="/src/assets/images/blog-lg4.jpg" className="img-fluid" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/src/assets/images/blog-lg2.jpg" className="img-fluid" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/src/assets/images/blog-lg3.jpg" className="img-fluid" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/src/assets/images/blog-lg1.jpg" className="img-fluid" />
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-12 mt-2">
              {/* <!-- product-thumbnail-slider --> */}
              <div className="swiper product-thumbnail-slider" >
                <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ width: "202.667px", marginRight: "8px" }}>
                    <img src="/src/assets/images/item8.jpg" className="img-fluid" />
                  </div>
                  <div className="swiper-slide"style={{ width: "202.667px", marginRight: "8px" }}>
                    <img src="/src/assets/images/item4.jpg" className="img-fluid" />
                  </div>
                  <div className="swiper-slide" style={{ width: "202.667px", marginRight: "8px" }}>
                    <img src="/src/assets/images/item7.jpg" className="img-fluid" />
                  </div>
                  <div className="swiper-slide" style={{ width: "202.667px", marginRight: "8px" }}>
                    <img src="/src/assets/images/item1.jpg" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div className="col-lg-6 mt-5 ">
          <div className="product-info">
            <div className="element-header">
              <h2 itemProp="name" className="display-6">Jump Suit</h2>
              <div className="rating-container d-flex gap-0 align-items-center">
                <span className="rating secondary-font">
                  <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                  <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                  <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                  <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                  <iconify-icon icon="clarity:star-solid" className="text-primary"></iconify-icon>
                  5.0</span>
              </div>
            </div>
            <div className="product-price pt-3 pb-3">
              <strong className="text-primary display-6 fw-bold">$170.00</strong><del className="ms-2">$240.00</del>
            </div>
            <p>Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque amet. Bibendum adipiscing platea
              blandit sit sed quam semper rhoncus. Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris,
              cras egestas quam venenatis neque.</p>
            <div className="cart-wrap">
              <div className="color-options product-select">
                <div className="color-toggle pt-2" data-option-index="0">
                  <h6 className="item-title fw-bold">Color:</h6>
                  <ul className="select-list list-unstyled d-flex">
                    <li className="select-item pe-3" data-val="Gray" title="Gray">
                      <a href="#" className="btn btn-light active">Gray</a>
                    </li>
                    <li className="select-item pe-3" data-val="Black" title="Black">
                      <a href="#" className="btn btn-light">Black</a>
                    </li>
                    <li className="select-item pe-3" data-val="Blue" title="Blue">
                      <a href="#" className="btn btn-light">Blue</a>
                    </li>
                    <li className="select-item" data-val="Red" title="Red">
                      <a href="#" className="btn btn-light disabled">Red</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="swatch product-select pt-3" data-option-index="1">
                <h6 className="item-title fw-bold">Size:</h6>
                <ul className="select-list list-unstyled d-flex">
                  <li data-value="S" className="select-item pe-3">
                    <a href="#" className="btn btn-light">XL</a>
                  </li>
                  <li data-value="M" className="select-item pe-3">
                    <a href="#" className="btn btn-light active">L</a>
                  </li>
                  <li data-value="L" className="select-item pe-3">
                    <a href="#" className="btn btn-light">M</a>
                  </li>
                  <li data-value="L" className="select-item">
                    <a href="#" className="btn btn-light">S</a>
                  </li>
                </ul>
              </div>
              <div className="product-quantity pt-2">
                <div className="stock-number text-dark"><em>2 in stock</em></div>
                <div className="stock-button-wrap">

                  <div className="input-group product-qty align-items-center w-25">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus">
                        <svg width="16" height="16">
                          <span>-</span>
                        </svg>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity"
                      className="form-control input-number text-center p-2 mx-1" value="1"/>
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus"
                        data-field="">
                        <svg width="16" height="16">
                          <span>+</span>
                        </svg>
                      </button>
                    </span>
                  </div>

                  <div className="d-flex flex-wrap pt-4">
                    <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                      <h5 className="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <a href="#" className="btn-wishlist px-4 pt-3 ">
                      <iconify-icon icon="fluent:heart-28-filled" className="fs-5"></iconify-icon>
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="meta-product pt-4">
              <div className="meta-item d-flex align-items-baseline">
                <h6 className="item-title fw-bold no-margin pe-2">SKU:</h6>
                <ul className="select-list list-unstyled d-flex">
                  <li data-value="S" className="select-item">1223</li>
                </ul>
              </div>
              <div className="meta-item d-flex align-items-baseline">
                <h6 className="item-title fw-bold no-margin pe-2">Category:</h6>
                <ul className="select-list list-unstyled d-flex">
                  <li data-value="S" className="select-item">
                    <a href="#">Pet</a>,
                  </li>
                  <li data-value="S" className="select-item">
                    <a href="#">Dog</a>,
                  </li>
                </ul>
              </div>
              <div className="meta-item d-flex align-items-baseline">
                <h6 className="item-title fw-bold no-margin pe-2">Tags:</h6>
                <ul className="select-list list-unstyled d-flex">
                  <li data-value="S" className="select-item">
                    <a href="#">Clothes</a>,
                  </li>
                  <li data-value="S" className="select-item">
                    <a href="#">Hoodies</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="product-info-tabs py-md-5">
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column flex-md-row align-items-start gap-5">
          <div className="nav flex-row flex-wrap flex-md-column nav-pills me-3 col-lg-3" id="v-pills-tab" role="tablist"
            aria-orientation="vertical">
            <button className="nav-link fs-5 mb-2 text-start active" id="v-pills-description-tab" data-bs-toggle="pill"
              data-bs-target="#v-pills-description" type="button" role="tab" aria-controls="v-pills-description"
              aria-selected="false" tabIndex={-1}>Description</button>
            <button className="nav-link fs-5 mb-2 text-start" id="v-pills-additional-tab" data-bs-toggle="pill"
              data-bs-target="#v-pills-additional" type="button" role="tab" aria-controls="v-pills-additional"
              aria-selected="false" tabIndex={-1}>Additional Information</button>
            <button className="nav-link fs-5 mb-2 text-start" id="v-pills-reviews-tab" data-bs-toggle="pill"
              data-bs-target="#v-pills-reviews" type="button" role="tab" aria-controls="v-pills-reviews"
              aria-selected="true">Customer Reviews</button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade active show" id="v-pills-description" role="tabpanel"
              aria-labelledby="v-pills-description-tab" tabIndex={0}>
              <h2>Product Description</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
                nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                vulputate sem tristique cursus.</p>
                <ul style={{ listStyleType: 'disc' }} className="list-unstyled ps-4">
                <li>Donec nec justo eget felis facilisis fermentum.</li>
                <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                <li>Aliquam porttitor mauris sit amet orci.</li>
              </ul>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec
                nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim
                pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                vulputate sem tristique cursus. </p>
            </div>
            <div className="tab-pane fade" id="v-pills-additional" role="tabpanel" aria-labelledby="v-pills-additional-tab"
              tabIndex={0}>
              <h2>How to Use the Product</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum.</p>
            </div>
            <div className="tab-pane fade" id="v-pills-reviews" role="tabpanel" aria-labelledby="v-pills-reviews-tab"
              tabIndex={0}>
              <div className="review-box d-flex flex-wrap">
                <div className="col-lg-6 d-flex flex-wrap gap-3">
                  <div className="col-md-2">
                    <div className="image-holder">
                      <img src="/src/assets/images/reviewer-1.jpg" alt="review" className="img-fluid rounded-circle"/>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="review-content">
                      <div className="rating-container d-flex align-items-center">
                        <div className="rating" data-rating="1">
                          <svg width="24" height="24" className="text-primary">
                            <use xlinkHref="#star-solid"></use>
                          </svg>
                        </div>
                        <div className="rating" data-rating="2">
                          <svg width="24" height="24" className="text-primary">
                            <use xlinkHref="#star-solid"></use>
                          </svg>
                        </div>
                        <div className="rating" data-rating="3">
                          <svg width="24" height="24" className="text-primary">
                            <use xlinkHref="#star-solid"></use>
                          </svg>
                        </div>
                        <div className="rating" data-rating="4">
                          <svg width="24" height="24" className="text-secondary">
                          <use xlinkHref="#star-solid"></use>
                          </svg>
                        </div>
                        <div className="rating" data-rating="5">
                          <svg width="24" height="24" className="text-secondary">
                          <use xlinkHref="#star-solid"></use>
                          </svg>
                        </div>
                        <span className="rating-count">(3.5)</span>
                      </div>
                      <div className="review-header">
                        <span className="author-name">Tina Johnson</span>
                        <span className="review-date">– 03/07/2023</span>
                      </div>
                      <p>Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis
                        convallis</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 d-flex flex-wrap gap-3">
                  <div className="col-md-2">
                    <div className="image-holder">
                      <img src="/src/assets/images/reviewer-2.jpg" alt="review" className="img-fluid rounded-circle"/>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="review-content">
                      <div className="rating-container d-flex align-items-center">
                        <div className="rating" data-rating="1">
                          <svg width="24" height="24" className="text-primary">
                          <use xlinkHref="#star-solid"></use>
                          </svg>
                        </div>
                        <div className="rating" data-rating="2">
                          <svg width="24" height="24" className="text-primary">
                          <use xlinkHref="#star-solid"></use>
                          </svg>
                        </div>
                        <div className="rating" data-rating="3">
                          <svg width="24" height="24" className="text-primary">
                          <use xlinkHref="#star-solid"></use>
                          </svg>
                        </div>
                        <div className="rating" data-rating="4">
                          <svg width="24" height="24" className="text-secondary">
                          <use xlinkHref="#star-solid"></use>
                          </svg>
                        </div>
                        <div className="rating" data-rating="5">
                          <svg width="24" height="24" className="text-secondary">
                          <use xlinkHref="#star-solid"></use>
                          </svg>
                        </div>
                        <span className="rating-count">(3.5)</span>
                      </div>
                      <div className="review-header">
                        <span className="author-name">Jenny Willis</span>
                        <span className="review-date">– 03/06/2022</span>
                      </div>
                      <p>Vitae tortor condimentum lacinia quis vel eros donec ac. Nam at lectus urna duis convallis
                        convallis</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="add-review mt-5">
                <h3>Add a review</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
                <form id="form" className="form-group">

                  <div className="pb-3">
                    <div className="review-rating">
                      <span>Your rating *</span>
                      <div className="rating-container d-flex align-items-center">
                        <span className="rating secondary-font">
                          <iconify-icon icon="clarity:star-solid" className="text-primary me-2"></iconify-icon>
                          <iconify-icon icon="clarity:star-solid" className="text-primary me-2"></iconify-icon>
                          <iconify-icon icon="clarity:star-solid" className="text-primary me-2"></iconify-icon>
                          <iconify-icon icon="clarity:star-solid" className="text-primary me-2"></iconify-icon>
                          <iconify-icon icon="clarity:star-solid" className="text-primary me-2"></iconify-icon>
                          (5.0)</span>
                      </div>
                    </div>
                  </div>
                  <div className="pb-3">
                    <input type="file" className="form-control" data-text="Choose your file"/>
                  </div>
                  <div className="pb-3">
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Write your name here*" className="form-control"/>
                  </div>
                  <div className="pb-3">
                    <label>Your Email</label>
                    <input type="text" name="email" placeholder="Write your email here*" className="form-control"/>
                  </div>
                  <div className="pb-3">
                    <label>Your Review</label>
                    <textarea className="form-control" placeholder="Write your review here*"></textarea>
                  </div>
                  <div className="pb-3">
                    <label>
                      <input type="checkbox" required />
                      <span className="label-body">Save my name, email, and website in this browser for the next
                        time.</span>
                    </label>
                  </div>
                  <button type="submit" name="submit"
                    className="btn btn-dark btn-large text-uppercase w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="service" className="mt-5 pt-2">
    <div className="container py-5 my-5">
      <div className="row g-md-5 pt-4">
        <div className="col-md-3 my-3">
          <div className="card">
            <div>
              <iconify-icon className="service-icon text-primary" icon="la:shopping-cart"></iconify-icon>
            </div>
            <h3 className="card-title py-2 m-0">Free Delivery</h3>
            <div className="card-text">
              <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-3">
          <div className="card">
            <div>
              <iconify-icon className="service-icon text-primary" icon="la:user-check"></iconify-icon>
            </div>
            <h3 className="card-title py-2 m-0">100% secure payment</h3>
            <div className="card-text">
              <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-3">
          <div className="card">
            <div>
              <iconify-icon className="service-icon text-primary" icon="la:tag"></iconify-icon>
            </div>
            <h3 className="card-title py-2 m-0">Daily Offer</h3>
            <div className="card-text">
              <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 my-3">
          <div className="card">
            <div>
              <iconify-icon className="service-icon text-primary" icon="la:award"></iconify-icon>
            </div>
            <h3 className="card-title py-2 m-0">Quality guarantee</h3>
            <div className="card-text">
              <p className="blog-paragraph fs-6">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section id="insta" className="my-3">
    <div className="row g-0 py-5">
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <iconify-icon className="text-white" icon="la:instagram"></iconify-icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta1.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <iconify-icon className="text-white" icon="la:instagram"></iconify-icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta2.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <iconify-icon className="text-white" icon="la:instagram"></iconify-icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta3.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <iconify-icon className="text-white" icon="la:instagram"></iconify-icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta4.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <iconify-icon className="text-white" icon="la:instagram"></iconify-icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta5.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <iconify-icon className="text-white" icon="la:instagram"></iconify-icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta6.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Productdetail
