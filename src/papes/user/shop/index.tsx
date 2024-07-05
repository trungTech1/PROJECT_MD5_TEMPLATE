/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Icon } from "@iconify/react";
import item7Image from "@images/item7.jpg";
import { useSelector } from "react-redux";

const Shop = () => {
const categoryStore = useSelector((store: any) => store.category);
console.log(categoryStore.categories[0].category_name);
  return (
    <div className="shop">
      <section id="banner" className="py-3" style={{ background: "#F9F3EC" }}>
        <div className="container">
          <div className="hero-content py-5 my-3">
            <h2 className="display-1 mt-3 mb-0">Shop</h2>
            <nav className="breadcrumb">
              <a className="breadcrumb-item nav-link" href="#">
                Home
              </a>
              <a className="breadcrumb-item nav-link" href="#">
                Pages
              </a>
              <span className="breadcrumb-item active" aria-current="page">
                Shop
              </span>
            </nav>
          </div>
        </div>
      </section>

      <div className="shopify-grid">
        <div className="container py-5 my-5">
          <div className="row flex-md-row-reverse g-md-5 mb-5">
            <main className="col-md-9">
              <div className="filter-shop d-md-flex justify-content-between align-items-center">
                <div className="showing-product">
                  <p className="m-0">Showing 1–9 of 55 results</p>
                </div>
                <div className="sort-by">
                  <select className="filter-categories border-0 m-0">
                    <option value="">Default sorting</option>
                    <option value="">Name (A - Z)</option>
                    <option value="">Name (Z - A)</option>
                    <option value="">Price (Low-High)</option>
                    <option value="">Price (High-Low)</option>
                    <option value="">Rating (Highest)</option>
                    <option value="">Rating (Lowest)</option>
                    <option value="">Model (A - Z)</option>
                    <option value="">Model (Z - A)</option>
                  </select>
                </div>
              </div>

              <div className="product-grid row">
                {/* Product items would go here */}
                {/* Example of one product item: */}
                <div className="col-md-4 my-4">
                  <div className="card position-relative">
                    <a href="single-product.html">
                      <img
                        src={item7Image}
                        className="img-fluid rounded-4"
                        alt="image"
                      />
                    </a>
                    <div className="card-body p-0">
                      <a href="single-product.html">
                        <h3 className="card-title pt-4 m-0">Grey hoodie</h3>
                      </a>
                      <div className="card-text">
                        <span className="rating secondary-font">
                          <Icon
                            icon="clarity:star-solid"
                            className="text-primary"
                          />
                          <Icon
                            icon="clarity:star-solid"
                            className="text-primary"
                          />
                          <Icon
                            icon="clarity:star-solid"
                            className="text-primary"
                          />
                          <Icon
                            icon="clarity:star-solid"
                            className="text-primary"
                          />
                          <Icon
                            icon="clarity:star-solid"
                            className="text-primary"
                          />
                          {/* Repeat star icons */}
                          5.0
                        </span>
                        <h3 className="secondary-font text-primary">$18.00</h3>
                        <div className="d-flex flex-wrap mt-3">
                          <a href="#" className="btn-cart me-3 px-4 pt-3 pb-3">
                            <h5 className="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a href="#" className="btn-wishlist px-4 pt-3">
                            <Icon
                              icon="fluent:heart-28-filled"
                              className="fs-5"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Repeat for other products */}
              </div>

              <nav
                className="navigation paging-navigation text-center mt-5"
                role="navigation"
              >
                <div className="pagination loop-pagination d-flex justify-content-center align-items-center">
                  <a
                    href="#"
                    className="pagination-arrow d-flex align-items-center mx-3"
                  >
                    <Icon
                      icon="ic:baseline-keyboard-arrow-left"
                      className="pagination-arrow fs-1"
                    />
                  </a>
                  <span
                    aria-current="page"
                    className="page-numbers mt-2 fs-3 mx-3 current"
                  >
                    1
                  </span>
                  <a className="page-numbers mt-2 fs-3 mx-3" href="#">
                    2
                  </a>
                  <a className="page-numbers mt-2 fs-3 mx-3" href="#">
                    3
                  </a>
                  <a
                    href="#"
                    className="pagination-arrow d-flex align-items-center mx-3"
                  >
                    <Icon
                      icon="ic:baseline-keyboard-arrow-right"
                      className="pagination-arrow fs-1"
                    />
                  </a>
                </div>
              </nav>
            </main>

            <aside className="col-md-3 mt-5">
              <div className="sidebar">
                <div className="widget-menu">
                  <div className="widget-search-bar">
                    <div className="search-bar border rounded-2 border-dark-subtle pe-3">
                      <form
                        id="search-form"
                        className="text-center d-flex align-items-center"
                        action=""
                        method=""
                      >
                        <input
                          type="text"
                          className="form-control border-0 bg-transparent"
                          placeholder="Search for products"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                          />
                        </svg>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="widget-product-categories pt-5">
                  <h4 className="widget-title">Categories</h4>
                  <ul className="product-categories sidebar-list list-unstyled">
                    {categoryStore.categories?.map((category: any) => (
                      <li className="cat-item" key={
                        Date.now() + Math.random()
                      }>
                        <a href="">{category.category_name}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="widget-product-tags pt-3">
                  <h4 className="widget-title">Tags</h4>
                  <ul className="product-tags sidebar-list list-unstyled">
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        Pets
                      </a>
                    </li>
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        Clothes
                      </a>
                    </li>
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        Foods
                      </a>
                    </li>
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        Toys
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget-product-brands pt-3">
                  <h4 className="widget-title">Brands</h4>
                  <ul className="product-tags sidebar-list list-unstyled">
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        Denim
                      </a>
                    </li>
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        Puma
                      </a>
                    </li>
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        Klaws
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget-price-filter pt-3">
                  <h4 className="widget-titlewidget-title">Filter By Price</h4>
                  <ul className="product-tags sidebar-list list-unstyled">
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        Less than $10
                      </a>
                    </li>
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        $10- $20
                      </a>
                    </li>
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        $20- $30
                      </a>
                    </li>
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        $30- $40
                      </a>
                    </li>
                    <li className="tags-item">
                      <a href="#" className="nav-link">
                        $40- $50
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <section
        id="register"
        style={{ background: "url('images/background-img.png') no-repeat" }}
        className="my-5"
      >
         <div className="container my-5">
      <div className="row my-5 py-5">
        <div className="offset-md-3 col-md-6 my-5">
          <h2 className="display-3 fw-normal text-center">
            Get 20% Off on <span className="text-primary">first Purchase</span>
          </h2>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control form-control-lg"
                name="password1"
                id="password1"
                placeholder="Create Password"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control form-control-lg"
                name="password2"
                id="password2"
                placeholder="Repeat Password"
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-dark btn-lg rounded-1">
                Register it now
              </button>
            </div>
          </form>
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
              <Icon className="service-icon text-primary" icon="la:user-check"></Icon>
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
              <Icon className="service-icon text-primary" icon="la:tag"></Icon>
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
              <Icon className="service-icon text-primary" icon="la:award"></Icon>
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
          <Icon className="text-white" icon="la:instagram"></Icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta1.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <Icon className="text-white" icon="la:instagram"></Icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta2.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <Icon className="text-white" icon="la:instagram"></Icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta3.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <Icon className="text-white" icon="la:instagram"></Icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta4.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <Icon className="text-white" icon="la:instagram"></Icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta5.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
      <div className="col instagram-item  text-center position-relative">
        <div className="icon-overlay d-flex justify-content-center position-absolute">
          <Icon className="text-white" icon="la:instagram"></Icon>
        </div>
        <a href="#">
          <img src="/src/assets/images/insta6.jpg" alt="insta-img" className="img-fluid rounded-3"/>
        </a>
      </div>
    </div>
      </section>
    </div>
  );
};

export default Shop;
