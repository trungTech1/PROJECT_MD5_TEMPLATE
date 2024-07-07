import React from "react";
import "./checkout.scss";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import moneyFormat from "@/util/util";
import api from "@/api";
import { Modal } from "antd";
import { orderActions } from "@/store/slices/order.slice";

const Checkout = () => {
  const dispatch = useDispatch();
  const orderStore = useSelector((state: RootState) => state.order);

  const calculateTotal = (cartDetails: any[]) => {
    return cartDetails.reduce((total, item) => total + item.price, 0);
  };
  const totalAmount = calculateTotal(orderStore.cart?.details || []);

  return (
    <div>
      <section id="banner" className="py-3" style={{ background: "#F9F3EC;" }}>
        <div className="container">
          <div className="hero-content py-5 my-3">
            <h2 className="display-1 mt-3 mb-0">Checkout</h2>
            <nav className="breadcrumb">
              <a className="breadcrumb-item nav-link" href="#">
                Home
              </a>
              <a className="breadcrumb-item nav-link" href="#">
                Pages
              </a>
              <span className="breadcrumb-item active" aria-current="page">
                Checkout
              </span>
            </nav>
          </div>
        </div>
      </section>

      <section className="shopify-cart checkout-wrap">
        <div className="container py-5 my-5">
          <form className="form-group">
            <div className="row d-flex flex-wrap">
              <div className="col-lg-6">
                <h2 className="text-dark pb-3">Thông tin giao nhận</h2>
                <div className="billing-details">
                  <label htmlFor="fname">First Name*</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    className="form-control mt-2 mb-4 ps-3"
                  />
                  <label htmlFor="lname">Last Name*</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    className="form-control mt-2 mb-4 ps-3"
                  />
                  <label htmlFor="cname">Company Name(optional)*</label>
                  <input
                    type="text"
                    id="cname"
                    name="companyname"
                    className="form-control mt-2 mb-4"
                  />
                  <label htmlFor="state">Tỉnh <span className="requiet">*</span></label>
                  <select
                    className="form-select form-control mt-2 mb-4"
                    aria-label="Chọn tỉnh thành"
                  >
                    <option selected hidden>
                      Chọn tỉnh thành
                    </option>
                    <option value="angiang">An Giang</option>
                    <option value="bariavungtau">Bà Rịa - Vũng Tàu</option>
                    <option value="baclieu">Bạc Liêu</option>
                    <option value="backan">Bắc Kạn</option>
                    <option value="bacgiang">Bắc Giang</option>
                    <option value="bacninh">Bắc Ninh</option>
                    <option value="bentre">Bến Tre</option>
                    <option value="binhduong">Bình Dương</option>
                    <option value="binhdinh">Bình Định</option>
                    <option value="binhphuoc">Bình Phước</option>
                    <option value="binhthuan">Bình Thuận</option>
                    <option value="camau">Cà Mau</option>
                    <option value="caobang">Cao Bằng</option>
                    <option value="cantho">Cần Thơ</option>
                    <option value="danang">Đà Nẵng</option>
                    <option value="daklak">Đắk Lắk</option>
                    <option value="daknong">Đắk Nông</option>
                    <option value="dienbien">Điện Biên</option>
                    <option value="dongnai">Đồng Nai</option>
                    <option value="dongthap">Đồng Tháp</option>
                    <option value="gialai">Gia Lai</option>
                    <option value="hagiang">Hà Giang</option>
                    <option value="hanam">Hà Nam</option>
                    <option value="hanoi">Hà Nội</option>
                    <option value="hatinh">Hà Tĩnh</option>
                    <option value="haiduong">Hải Dương</option>
                    <option value="haiphong">Hải Phòng</option>
                    <option value="haugiang">Hậu Giang</option>
                    <option value="hoabinh">Hòa Bình</option>
                    <option value="hungyen">Hưng Yên</option>
                    <option value="khanhhoa">Khánh Hòa</option>
                    <option value="kiengiang">Kiên Giang</option>
                    <option value="kontum">Kon Tum</option>
                    <option value="laichau">Lai Châu</option>
                    <option value="lamdong">Lâm Đồng</option>
                    <option value="langson">Lạng Sơn</option>
                    <option value="laocai">Lào Cai</option>
                    <option value="longan">Long An</option>
                    <option value="namdinh">Nam Định</option>
                    <option value="nghean">Nghệ An</option>
                    <option value="ninhbinh">Ninh Bình</option>
                    <option value="ninhthuan">Ninh Thuận</option>
                    <option value="phutho">Phú Thọ</option>
                    <option value="phuyen">Phú Yên</option>
                    <option value="quangbinh">Quảng Bình</option>
                    <option value="quangnam">Quảng Nam</option>
                    <option value="quangngai">Quảng Ngãi</option>
                    <option value="quangninh">Quảng Ninh</option>
                    <option value="quangtri">Quảng Trị</option>
                    <option value="soctrang">Sóc Trăng</option>
                    <option value="sonla">Sơn La</option>
                    <option value="taininh">Tây Ninh</option>
                    <option value="thaibinh">Thái Bình</option>
                    <option value="thainguyen">Thái Nguyên</option>
                    <option value="thanhhoa">Thanh Hóa</option>
                    <option value="thuathienhue">Thừa Thiên Huế</option>
                    <option value="tiengiang">Tiền Giang</option>
                    <option value="hochiminh">TP Hồ Chí Minh</option>
                    <option value="travinh">Trà Vinh</option>
                    <option value="tuyenquang">Tuyên Quang</option>
                    <option value="vinhlong">Vĩnh Long</option>
                    <option value="vinhphuc">Vĩnh Phúc</option>
                    <option value="yenbai">Yên Bái</option>
                  </select>
                  <label htmlFor="address">Địa chỉ*</label>
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="House number and street name"
                    className="form-control mt-3 ps-3 mb-3"
                  />
                  <input
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="Appartments, suite, etc."
                    className="form-control ps-3 mb-4"
                  />            
                  <label htmlFor="email">Số điện thoại*</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control mt-2 mb-4 ps-3"
                  />
                  <label htmlFor="email">Địa chỉ Email *</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control mt-2 mb-4 ps-3"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="text-dark pb-3">Thông Tin Thêm</h2>
                <div className="billing-details">
                  <label htmlFor="fname">Ghi chú đơn hàng (tùy chọn)</label>
                  <textarea
                    className="form-control pt-3 pb-3 ps-3 mt-2"
                    placeholder="Notes about your order. Like special notes for delivery."
                  ></textarea>
                </div>
                <div className="your-order mt-5">
                  <h2 className="display-7 text-dark pb-3">Tổng tiền</h2>
                  <div className="total-price">
                    <table cellSpacing="0" className="table">
                      <tbody>
                        <tr className="subtotal border-top border-bottom pt-2 pb-2 text-uppercase">
                          <th>Tổng phụ</th>
                          <td data-title="Subtotal">
                            <span className="price-amount amount ps-5">
                              <bdi>
                                {moneyFormat(totalAmount)}
                              </bdi>
                            </span>
                          </td>
                        </tr>
                        <tr className="order-total border-bottom pt-2 pb-2 text-uppercase">
                          <th>Tổng cộng</th>
                          <td data-title="Total">
                            <span className="price-amount amount ps-5">
                              <bdi>
                                {moneyFormat(totalAmount)}
                              </bdi>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="list-group mt-5 mb-3">
                    <h2 className="display-7 text-dark pb-3">Phương Thức Thanh Toán</h2>
                      <label className="list-group-item d-flex gap-2 border-0">
                        <input
                          className="form-check-input flex-shrink-0"
                          type="radio"
                          name="listGroupRadios"
                          id="listGroupRadios1"
                          value=""
                          checked
                        />
                        <span>
                          <strong className="text-uppercase">
                            Thanh thoán qua ngân hàng
                          </strong>
                        </span>
                      </label>
                      <label className="list-group-item d-flex gap-2 border-0">
                        <input
                          className="form-check-input flex-shrink-0"
                          type="radio"
                          name="listGroupRadios"
                          id="listGroupRadios3"
                          value=""
                        />
                        <span>
                          <strong className="text-uppercase">
                            Thanh toán trực tiếp
                          </strong>
                          <small className="d-block text-body-secondary">
                            Trả tiền lúc nhận hàng
                          </small>
                        </span>
                      </label>
                      {/* <label className="list-group-item d-flex gap-2 border-0">
                        <input
                          className="form-check-input flex-shrink-0"
                          type="radio"
                          name="listGroupRadios"
                          id="listGroupRadios3"
                          value=""
                        />
                        <span>
                          <strong className="text-uppercase">Paypal</strong>
                          <small className="d-block text-body-secondary">
                            Pay via PayPal; you can pay with your credit card if
                            you don’t have a PayPal account.
                          </small>
                        </span>
                      </label> */}
                    </div>
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-dark btn-lg rounded-1 w-100"
                      onClick={async (e) => {
                        e.preventDefault();
                        try {
                         await api.order.checkOut(orderStore.cart?.id || 0, totalAmount);
                          Modal.success({
                            title: "Đặt hàng thành công",
                            content: "Chúng tôi sẽ liên hệ với bạn sớm nhất",
                            onOk() {
                              window.location.href = "/";
                              dispatch(orderActions.loadDataThunk() as any);
                            },
                          })
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      THANH TOÁN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
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

export default Checkout;
