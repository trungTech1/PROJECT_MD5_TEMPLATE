import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import NearMeIcon from "@mui/icons-material/NearMe";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="my-5">
        <div className="container py-5 my-5">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-menu">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/logo.png?alt=media&token=aed26b6c-48d4-4b92-b3e7-ab90c35c4b43"
                  alt="logo"
                />
                <p className="blog-paragraph fs-6 mt-3">
                  Subscribe to our newsletter to get updates about our grand
                  offers.
                </p>
                <div className="social-links">
                  <ul className="d-flex list-unstyled gap-2">
                    <li className="social">
                      <a href="#">
                        <div className="social-icon">
                          <FacebookIcon />
                        </div>
                      </a>
                    </li>
                    <li className="social">
                      <a href="#">
                        <div className="social-icon">
                          <TwitterIcon />
                        </div>
                      </a>
                    </li>
                    <li className="social">
                      <a href="#">
                        <div className="social-icon">
                          <CatchingPokemonIcon />
                        </div>
                      </a>
                    </li>
                    <li className="social">
                      <a href="#">
                        <div className="social-icon">
                          <InstagramIcon />
                        </div>
                      </a>
                    </li>
                    <li className="social">
                      <a href="#">
                        <div className="social-icon">
                          <YouTubeIcon />
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu">
                <h3>Quick Links</h3>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      About us
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Offer
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Services
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Conatct Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu">
                <h3>Help Center</h3>
                <ul className="menu-list list-unstyled">
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      FAQs
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Payment
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Returns & Refunds
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Checkout
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="nav-link">
                      Delivery Information
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <h3>Our Newsletter</h3>
                <p className="blog-paragraph fs-6">
                  Subscribe to our newsletter to get updates about our grand
                  offers.
                </p>
                <div className="search-bar border rounded-pill border-dark-subtle px-2">
                  <form
                    className="text-center d-flex align-items-center"
                    action=""
                    method=""
                  >
                    <input
                      type="text"
                      className="form-control border-0 bg-transparent"
                      placeholder="Enter your email here"
                    />
                    <div className="send-icon">
                      <NearMeIcon />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div id="footer-bottom">
        <div className="container">
          <hr className="m-0" />
          <div className="row mt-3">
            <div className="col-md-6 copyright">
              <p className="secondary-font">
                © 2023 Waggy. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="secondary-font">
                Free HTML Template by{" "}
                <a
                  href="https://templatesjungle.com/"
                  target="_blank"
                  className="text-decoration-underline fw-bold text-black-50"
                >
                  TemplatesJungle
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
