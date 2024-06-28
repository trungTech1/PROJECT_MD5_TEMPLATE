
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const Authen = () => {
  return (
    <div>
       <section id="banner" className="py-3" style={{ background: '#F9F3EC' }}>
        <div className="container">
          <div className="hero-content py-5 my-3">
            <h2 className="display-1 mt-3 mb-0">Account</h2>
            <nav className="breadcrumb">
              <a className="breadcrumb-item nav-link" href="#">Home</a>
              <a className="breadcrumb-item nav-link" href="#">Pages</a>
              <span className="breadcrumb-item active" aria-current="page">Account</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="login-tabs padding-large">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="tabs-listing">
              <nav>
                <div className="nav nav-tabs d-flex justify-content-center border-dark-subtle mb-3" id="nav-tab" role="tablist">
                  <button
                    className="nav-link mx-3 fs-3 border-bottom border-dark-subtle border-0 text-uppercase active"
                    id="nav-sign-in-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-sign-in"
                    type="button"
                    role="tab"
                    aria-controls="nav-sign-in"
                    aria-selected="true"
                  >
                    Log In
                  </button>
                  <button
                    className="nav-link mx-3 fs-3 border-bottom border-dark-subtle border-0 text-uppercase"
                    id="nav-register-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-register"
                    type="button"
                    role="tab"
                    aria-controls="nav-register"
                    aria-selected="false"
                  >
                    Sign Up
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade active show" id="nav-sign-in" role="tabpanel" aria-labelledby="nav-sign-in-tab">
                  <div className="col-lg-8 offset-lg-2 mt-5">
                    <p className="mb-0">Log-In With Social</p>
                    <hr className="my-1" />
                    <div className="row mt-4 mb-5">
                      <div className="d-grid col-md-6 my-2">
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                          <div className="d-flex flex-wrap justify-content-center">
                            <Icon icon="ion:logo-google" className="signup-social-icon me-2" />
                            <p className="mb-0">Google</p>
                          </div>
                        </a>
                      </div>
                      <div className="d-grid col-md-6 my-2">
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">
                          <div className="d-flex flex-wrap justify-content-center">
                            <Icon icon="ion:logo-facebook" className="signup-social-icon me-2" />
                            <p className="mb-0">Facebook</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    <p className="mb-0">Or Log-In With Email</p>
                    <hr className="my-1" />

                    <form id="form1" className="form-group flex-wrap">
                      <div className="form-input col-lg-12 my-4">
                        <input type="text" id="exampleInputEmail1" name="email" placeholder="Enter email address" className="form-control mb-3 p-4" />
                        <input type="password" id="inputPassword1" placeholder="Enter password" className="form-control mb-3 p-4" aria-describedby="passwordHelpBlock" />

                        <label className="py-3 d-flex flex-wrap justify-content-between">
                          <div>
                            <input type="checkbox" required className="d-inline" />
                            <span className="label-body">Remember Me</span>
                          </div>

                          <div id="passwordHelpBlock" className="form-text">
                            <a href="#" className="text-primary fw-bold">Forgot Password?</a>
                          </div>
                        </label>
                        <div className="d-grid my-3">
                          <a href="#" className="btn btn-dark btn-lg rounded-1">Log In</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                {/* Sign Up tab content (similar structure to Log In tab) */}
                {/* ... */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="insta" className="my-5">
        <div className="row g-0 py-5">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="col instagram-item text-center position-relative">
              <div className="icon-overlay d-flex justify-content-center position-absolute">
                <Icon className="text-white" icon="la:instagram" />
              </div>
              <a href="#">
                <img src={`images/insta${num}.jpg`} alt="insta-img" className="img-fluid rounded-3" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Authen
