/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import { FaHeart, FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { User } from "@/store/slices/user.slice";
import {
  FaUser,
  FaSearch,
  FaShoppingBag,
  FaHeart,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./header.scss";
import api from "@/api";
import { Modal } from "antd";
import { useAuth } from "@/papes/user/home/papes/authen/authen";
import { RootState } from "@/store";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { login, setLogin } = useAuth();

  const User = useSelector((store: any) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(user);
  }, [User]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.user.verifyToken(token).then(res => {
        setUser(res.data.user);
        setLogin(true);
      }).catch(err => {
        console.error("Token verification failed:", err);
        localStorage.removeItem("token");
        setLogin(false);
      });
    }
  }, []);

  useEffect(() => {
    if (User) {
      setUser(User);
    }
  }, [User]);

  const categoryStore = useSelector((state: RootState) => {
    return state.category;
  });

const handleLogin = (ev: React.FormEvent) => {
  ev.preventDefault();
  const data = {
    loginId: (ev.target as any).loginId.value,
    password: (ev.target as any).password.value,
  };
  api.user
    .login(data)
    .then((res) => {
      Modal.success({
        title: "Thông báo",
        content: res.data.message,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      setLogin(true);
      if (res.data.role === 'true') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    })
    .catch((err) => {
      Modal.error({
        title: "Thông báo",
        content: err.response?.data?.message || "Đăng nhập thất bại",
      });
    });
  (ev.target as any).reset();
};

  const handleLogout = (e: any) => {
    localStorage.removeItem("token");
    e.preventDefault();
    setLogin(false);
    setUser(null);
    setIsUserDropdownOpen(false);
  };

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!event.target.closest(".position-relative")) {
        setIsUserDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header>
      <div className="container py-2">
        <div className="row py-4 pb-0 pb-sm-4 align-items-center">
          <div className="col-sm-4 col-lg-3 text-center text-sm-start">
            <div className="main-logo">
              <a href="/">
                <img
                  src="/src/assets/images/logo.png"
                  alt="logo"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
            <div className="search-bar border rounded-2 px-3 border-dark-subtle">
              <form
                id="search-form"
                className="text-center d-flex align-items-center"
                action=""
                method=""
              >
                <input
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Search for more than 10,000 products"
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
          <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
            <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 secondary-font text-muted">Phone</span>
              <h5 className="mb-0">+981-897149</h5>
            </div>
            <div className="support-box text-end d-none d-xl-block">
              <span className="fs-6 secondary-font text-muted">Email</span>
              <h5 className="mb-0">waggy@gmail.com</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <hr className="m-0" />
      </div>
      <div className="container">
        <nav className="main-menu d-flex navbar navbar-expand-lg ">
          <div className="d-flex d-lg-none align-items-end mt-3">
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li>
                <a href="/authen" className="mx-3">
                  <FaUser className="fs-4" />
                </a>
              </li>
              <li>
                <a href="/wishlist" className="mx-3">
                  <FaHeart className="fs-4" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mx-3"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                  aria-controls="offcanvasCart"
                >
                  <FaCartShopping className="fs-4 position-relative" />
                  <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                    03
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mx-3"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSearch"
                  aria-controls="offcanvasSearch"
                >
                  <FaSearch className="fs-4" style={{ color: "black" }} />
                </a>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header justify-content-center">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body justify-content-between">
              <select className="filter-categories border-0 mb-0 me-5">
                <option>Shop by Category</option>
                {categoryStore.categories?.map((category) => (
                  <option key={category.category_id}>{category.category_name}</option>
                ))}
              </select>
              <ul className="navbar-nav menu-list list-unstyled d-flex gap-md-3 mb-0">
                <li className="nav-item">
                  <a href="" className="nav-link active">
                    Home
                  </a>
                </li>
                <li
                  className={`nav-item dropdown ${
                    isDropdownOpen ? "show" : ""
                  }`}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    id="pages"
                    data-bs-toggle="dropdown"
                    aria-expanded={isDropdownOpen}
                    onClick={handleDropdownToggle}
                  >
                    Pages
                  </a>
                  <ul
                    className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
                    aria-labelledby="pages"
                  >
                    <li>
                      <a href="shop" className="dropdown-item">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="cart" className="dropdown-item">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a href="wishlist" className="dropdown-item">
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="checkout" className="dropdown-item">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a href="authen" className="dropdown-item">
                        Account
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="shop" className="nav-link">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a href="blog.html" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Others
                  </a>
                </li>
              </ul>
              <div className="d-none d-lg-flex align-items-end">
                <ul className="d-flex justify-content-end list-unstyled m-0">
                  <li className="position-relative">
                    <a
                      href="#"
                      className="mx-3 d-flex align-items-center text-decoration-none"
                      onClick={(e) => {
                        e.preventDefault();
                        handleUserDropdownToggle();
                      }}
                    >
                      <FaUser className="fs-4 me-2" />
                      <span className="d-none d-md-inline">
                        {login ? "Account" : "Login"}
                      </span>
                    </a>
                    {isUserDropdownOpen && (
                      <div className="position-absolute end-0 mt-2 py-2 bg-white rounded-3 shadow-lg user-dropdown">
                        {login ? (
                          <>
                            <div className="px-4 py-3 border-bottom">
                              <h6 className="mb-0">
                                Hello, {User.data.userName}
                              </h6>
                              <small className="text-muted">
                                {User.data.email}
                              </small>
                            </div>
                            <ul className="list-unstyled mb-0">
                              <li>
                                <a
                                  href="account"
                                  className="dropdown-item py-2 px-4"
                                >
                                  <FaUser className="me-2" /> User Profile
                                </a>
                              </li>
                              <li>
                                <a
                                  href="cart"
                                  className="dropdown-item py-2 px-4"
                                >
                                  <FaShoppingBag className="me-2" /> My Orders
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist"
                                  className="dropdown-item py-2 px-4"
                                >
                                  <FaHeart className="me-2" /> Favorite products
                                </a>
                              </li>
                              <li>
                                <a
                                  href="settings"
                                  className="dropdown-item py-2 px-4"
                                >
                                  <FaCog className="me-2" /> Setting
                                </a>
                              </li>
                              <li>
                                <a
                                  href="logout"
                                  className="dropdown-item py-2 px-4 "
                                  onClick={handleLogout}
                                >
                                  <FaSignOutAlt className="me-2" /> Log Out
                                </a>
                              </li>
                            </ul>
                          </>
                        ) : (
                          <div className="px-4 py-3">
                            <h6 className="mb-3">Login</h6>
                            <form
                              onSubmit={(ev) => {
                                handleLogin(ev);
                              }}
                            >
                              <div className="mb-3">
                                <input
                                  type="text"
                                  name="loginId"
                                  className="form-control"
                                  placeholder="Email/User Name"
                                  required
                                />
                              </div>
                              <div className="mb-3">
                                <input
                                  type="password"
                                  name="password"
                                  className="form-control"
                                  placeholder="Password"
                                  required
                                />
                              </div>
                              <button
                                type="submit"
                                className="btn btn-primary w-100"
                              >
                                Login
                              </button>
                            </form>
                            <div className="mt-3 text-center">
                              <a
                                href="/authen"
                                className="text-decoration-none"
                              >
                                Create an account
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                  <li>
                    <a href="/wishlist" className="mx-3">
                      <FaHeart className="fs-4 mx-3" />
                    </a>
                  </li>

                  <li className="">
                    <a
                      href="#"
                      className="mx-3"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasCart"
                      aria-controls="offcanvasCart"
                    >
                      <FaCartShopping className="fs-4 position-relative" />
                      <span className="position-absolute translate-middle badge rounded-circle bg-primary pt-2">
                        03
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );

}

export default Header;