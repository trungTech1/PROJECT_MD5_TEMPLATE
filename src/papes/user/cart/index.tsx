import { RootState } from "@/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.scss";
import { orderActions } from "@/store/slices/order.slice";
import api from "@/api";
import moneyFormat from "@/util/util";
import { Link } from "react-router-dom";

const Cart = () => {
  const orderStore = useSelector((state: RootState) => state.order);
  console.log(orderStore.cart?.details[0].product);
  const dispatch = useDispatch();
  
  const calculateTotal = (cartDetails: any[]) => {
    console.log("sđâsđâs",cartDetails);
    return cartDetails.reduce((total, item) => total + item.price, 0);
  };
  const totalAmount = calculateTotal(orderStore.cart?.details || []);
  const minusHandle = () => {
    const data = {
      productId: orderStore.cart?.details[0].product.id as number,
      quantity: 1 as number,
      price: orderStore.cart?.details[0].product.price as number,
    };
    if (data !== null) {
      api.order
        .addToCart(data)
        .then((res) => {
          dispatch(orderActions.loadDataThunk() as any);
          console.log("add to cart success", res);
        })
        .catch((err) => {
          console.log("add to cart failed", err);
        });
    }
  
  };
  const plusHanlde = () => {
      const data ={
        productId: orderStore.cart?.details[0].product.id as number,
        quantity: 1 as number,
        price : orderStore.cart?.details[0].product.price as number,
      }
      if(data !== null){
        api.order.addToCart(data).then((res)=>{
          dispatch(orderActions.loadDataThunk() as any)
          console.log("add to cart success", res)
      }
      ).catch((err)=>{
        console.log("add to cart failed", err)

      }
      )
      }
  };
  return (
    <div>
      <section id="banner" className="py-3" style={{ background: "#F9F3EC" }}>
        <div className="container">
          <div className="hero-content py-5 my-3">
            <h2 className="display-1 mt-3 mb-0">Cart</h2>
            <nav className="breadcrumb">
              <a className="breadcrumb-item nav-link" href="#">
                Home
              </a>
              <a className="breadcrumb-item nav-link" href="#">
                Pages
              </a>
              <span className="breadcrumb-item active" aria-current="page">
                Cart
              </span>
            </nav>
          </div>
        </div>
      </section>

      <section id="cart" className="my-5 py-5">
        <div className="container">
          <div className="row g-md-5">
            <div className="col-md-8 pe-md-5">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="card-title text-uppercase">
                      Product
                    </th>
                    <th scope="col" className="card-title text-uppercase">
                      Quantity
                    </th>
                    <th scope="col" className="card-title text-uppercase">
                      Subtotal
                    </th>
                    <th scope="col" className="card-title text-uppercase"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* <td scope="row" className="py-4">
                  <div className="cart-info d-flex flex-wrap align-items-center ">
                    <div className="col-lg-3">
                      <div className="card-image">
                        <img src="/src/assets/images/item1.jpg" alt="cloth" className="img-fluid"/>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="card-detail ps-3">
                        <h5 className="card-title">
                          <a href="#" className="text-decoration-none">Grey Hoodie</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 align-middle">
                  <div className="input-group product-qty align-items-center w-50">
                    <span className="input-group-btn">
                      <button type="button" className="quantity-left-minus btn btn-light btn-number" data-type="minus"style={
                          { backgroundColor: "#D1D8DFFa" }}  onClick={minusHandle}>
                        <span>-</span>
                      </button>
                    </span>
                    <input type="text" id="quantity" name="quantity"
                      className="form-control input-number text-center p-2 mx-1" 
                      value={quantity}
                      />
                    <span className="input-group-btn">
                      <button type="button" className="quantity-right-plus btn btn-light btn-number" data-type="plus"
                        data-field=""style={
                          { backgroundColor: "#D1D8DFFa" }} onClick={plusHanlde}>
                        <span>+</span>
                      </button>
                    </span>
                  </div>
                </td>
                <td className="py-4 align-middle">
                  <div className="total-price">
                    <span className="secondary-font fw-medium">$150.00</span>
                  </div>
                </td>
                <td className="py-4 align-middle">
                  <div className="cart-remove">
                    <button className="btn btn-light rounded-1 fs-6 p-3">Remove</button>
                  </div>
                </td> */}
                  {orderStore.cart?.details.map((item, index) => {
                    return (
                      <tr key={index + 1}>
                        <td scope="row" className="py-3">
                          <div className="cart-info d-flex flex-wrap align-items-center ">
                            <div className="col-lg-3">
                              <div className="card-image">
                                <img
                                  src={item.product.imageProducts[0].imageUrl}
                                  alt="cloth"
                                  className="img-cart"
                                />
                              </div>
                            </div>
                            <div className="col-lg-9">
                              <div className="card-detail ps-3">
                                <h5 className="card-title">
                                  <a href="#" className="text-decoration-none">
                                    {item.product.product_name}
                                  </a>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 align-middle">
                          <div className="input-group product-qty align-items-center w-20">
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-left-minus btn btn-light btn-number"
                                data-type="minus"
                                style={{ backgroundColor: "#D1D8DFFa" }}
                                onClick={minusHandle}
                              >
                                <span>-</span>
                              </button>
                            </span>
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              className="form-control input-number text-center p-1 mx-1"
                              value={item.quantity}
                            />
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="quantity-right-plus btn btn-light btn-number"
                                data-type="plus"
                                data-field=""
                                style={{ backgroundColor: "#D1D8DFFa" }}
                                onClick={plusHanlde}
                              >
                                <span>+</span>
                              </button>
                            </span>
                          </div>
                        </td>
                        <td className="py-4 align-middle">
                          <div className="total-price">
                            <span className="secondary-font fw-medium">
                              {moneyFormat(item.price)}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 align-middle">
                          <div className="cart-remove">
                            <button className="btn btn-light rounded-1 fs-6 p-3">
                              Remove
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-md-4">
              <div className="cart-totals">
                <h2 className="pb-4">Cart Total</h2>
                <div className="total-price pb-4">
                  <table cellSpacing="0" className="table text-uppercase">
                    <tbody>
                      <tr className="subtotal pt-2 pb-2 border-top border-bottom">
                        <th>Subtotal</th>
                        <td data-title="Subtotal">
                          <span className="price-amount amount text-dark ps-5">
                            {moneyFormat(totalAmount as number)}
                          </span>
                        </td>
                      </tr>
                      <tr className="order-total pt-2 pb-2 border-bottom">
                        <th>Total</th>
                        <td data-title="Total">
                          <span className="price-amount amount text-dark ps-5">
                            {moneyFormat(totalAmount as number)}   
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="button-wrap row g-2">
                  <div className="col-md-6">
                    <button className="btn btn-dark btn-lg rounded-1 fs-6 p-3 w-100">
                      Update Cart
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button className="btn btn-dark btn-lg rounded-1 fs-6 p-3 w-100">
                      Continue To Shop
                    </button>
                  </div>
                  <div className="col-md-12">
                    <Link
                      to="checkout"
                      className="text-decoration-none text-white"
                    >
                    <button
                      className="btn btn-primary p-3 text-uppercase rounded-1 w-100"
                    >
                      Proceed to checkout
                    </button></Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="service">
        <div className="container pt-5 mt-5">
          <div className="row g-md-5 pt-4">
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary"
                    icon="la:shopping-cart"
                  ></iconify-icon>
                </div>
                <h3 className="card-title py-2 m-0">Free Delivery</h3>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary"
                    icon="la:user-check"
                  ></iconify-icon>
                </div>
                <h3 className="card-title py-2 m-0">100% secure payment</h3>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary"
                    icon="la:tag"
                  ></iconify-icon>
                </div>
                <h3 className="card-title py-2 m-0">Daily Offer</h3>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="card">
                <div>
                  <iconify-icon
                    className="service-icon text-primary"
                    icon="la:award"
                  ></iconify-icon>
                </div>
                <h3 className="card-title py-2 m-0">Quality guarantee</h3>
                <div className="card-text">
                  <p className="blog-paragraph fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipi elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="insta" className="my-5">
        <div className="row g-0 py-5">
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon
                className="text-white"
                icon="la:instagram"
              ></iconify-icon>
            </div>
            <a href="#">
              <img
                src="/src/assets/images/insta1.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon
                className="text-white"
                icon="la:instagram"
              ></iconify-icon>
            </div>
            <a href="#">
              <img
                src="/src/assets/images/insta2.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon
                className="text-white"
                icon="la:instagram"
              ></iconify-icon>
            </div>
            <a href="#">
              <img
                src="/src/assets/images/insta3.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon
                className="text-white"
                icon="la:instagram"
              ></iconify-icon>
            </div>
            <a href="#">
              <img
                src="/src/assets/images/insta4.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon
                className="text-white"
                icon="la:instagram"
              ></iconify-icon>
            </div>
            <a href="#">
              <img
                src="/src/assets/images/insta5.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
          <div className="col instagram-item  text-center position-relative">
            <div className="icon-overlay d-flex justify-content-center position-absolute">
              <iconify-icon
                className="text-white"
                icon="la:instagram"
              ></iconify-icon>
            </div>
            <a href="#">
              <img
                src="/src/assets/images/insta6.jpg"
                alt="insta-img"
                className="img-fluid rounded-3"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
