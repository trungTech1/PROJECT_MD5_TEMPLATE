import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect, useState } from 'react'
import { Modal } from 'antd'
import api from '@/api'
import { useAuth } from './authen'




const Authen = () => {
  const { setLogin } = useAuth();
  const [currentTab, setCurrentTab] = useState("register");

  function register(ev: React.FormEvent) {
    ev.preventDefault()
    const data = {
      userName: (ev.target as any).userName.value,
      email: (ev.target as any).email.value,
      password: (ev.target as any).password.value,
    }
    console.log("data", data)
    api.user.register(data).then(res => {
      Modal.success({
        title: "Thông báo",
        content: res.data.message
      })
      setCurrentTab('login');
    }).catch(err => {
      Modal.error({
        title: "Thông báo",
        content: err.response.data.message
      })
    });
    //reset form
    (ev.target as any).userName.value = '';
    (ev.target as any).email.value = '';
    (ev.target as any).password.value = '';
    (ev.target as any).password.value = '';
  }

  function handleLogin(ev: React.FormEvent) {
    ev.preventDefault()
    const data = {
      loginId: (ev.target as any).loginId.value,
      password: (ev.target as any).password.value
    }
    api.user.login(data).then(res => {
      Modal.success({
        title: "Thông báo",
        content: res.data.message
      })
      localStorage.setItem("token", res.data.token)
      setLogin(true)
    }).catch(err => {
      Modal.error({
        title: "Thông báo",
        content: err.response.data.message
      })
    });
    //reset form
    (ev.target as any).userName.value = '';
    (ev.target as any).email.value = '';
    (ev.target as any).password.value = '';
    (ev.target as any).password.value = '';
  }



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
                    className={`nav-link mx-3 fs-3 border-bottom border-dark-subtle border-0 text-uppercase ${currentTab === 'login' ? 'active' : ''}`}
                    id="nav-sign-in-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-sign-in"
                    type="button"
                    role="tab"
                    aria-controls="nav-sign-in"
                    aria-selected={currentTab === 'login'}
                    onClick={() => setCurrentTab('login')} // Cập nhật state khi người dùng chọn tab
                  >
                    Log In
                  </button>
                  <button
                    className={`nav-link mx-3 fs-3 border-bottom border-dark-subtle border-0 text-uppercase ${currentTab === 'register' ? 'active' : ''}`}
                    id="nav-register-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-register"
                    type="button"
                    role="tab"
                    aria-controls="nav-register"
                    aria-selected={currentTab === 'register'}
                    onClick={() => setCurrentTab('register')} // Cập nhật state khi người dùng chọn tab
                  >
                    Sign Up
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className={`tab-pane fade ${currentTab === 'login' ? 'active show' : ''}`} id="nav-sign-in" role="tabpanel" aria-labelledby="nav-sign-in-tab">
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

                    <p className="mb-0">Or Log-In With Email/UserName</p>
                    <hr className="my-1" />

                    <form onSubmit={(ev) => {
                      handleLogin(ev)
                      handleLogin(ev)
                    }} id="form1" className="form-group flex-wrap">
                      <div className="form-input col-lg-12 my-4">
                        <input type="text" id="exampleInputEmail1" name="loginId" placeholder="Enter email/userName" className="form-control mb-3 p-4" />
                        <input type="password" id="inputPassword1" name='password' placeholder="Enter password" className="form-control mb-3 p-4" aria-describedby="passwordHelpBlock" />

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
                          <button type='submit' className="btn btn-dark btn-lg rounded-1">Login</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className={`tab-pane fade ${currentTab === 'register' ? 'active show' : ''}`} id="nav-register" role="tabpanel" aria-labelledby="nav-register-tab">
                  <div className="col-lg-8 offset-lg-2 mt-5">

                    <p className="mb-0">Sign-up With Social</p>
                    <hr className="my-1" />
                    <div className="row mt-4 mb-5">
                      <div className="d-grid col-md-6 my-2">
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 ">
                          <div className="d-flex flex-wrap justify-content-center">
                            <iconify-icon icon="ion:logo-google"
                              className="signup-social-icon me-2"></iconify-icon>
                            <p className="mb-0">Google</p>
                          </div>
                        </a>
                      </div>
                      <div className="d-grid col-md-6 my-2">
                        <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 ">
                          <div className="d-flex flex-wrap justify-content-center">
                            <iconify-icon icon="ion:logo-facebook"
                              className="signup-social-icon me-2"></iconify-icon>
                            <p className="mb-0">Facebook</p>
                          </div>
                        </a>
                      </div>
                    </div>


                    <p className="mb-0">Or Sign-Up With Email/UserName</p>
                    <hr className="my-1" />

                    <form id="form1" className="form-group flex-wrap "
                      onSubmit={(ev) => {
                        register(ev)
                      }}>
                      <div className="form-input col-lg-12 my-4">

                        <input type="text" id="exampleInputName" name="userName" className="form-control mb-3 p-4"
                          placeholder="Your User Name" />
                        <input type="text" id="exampleInputEmail1" name="email" className="form-control mb-3 p-4"
                          placeholder="Your email address" />
                        <input type="password" id="inputPassword1" placeholder="Set your password"
                          name='password'
                          className="form-control mb-3 p-4" aria-describedby="passwordHelpBlock" />
                        <input type="password" id="inputPassword2" placeholder="Retype your password"
                          name='password'
                          className="form-control mb-3 p-4" aria-describedby="passwordHelpBlock" />

                        <label className="py-3 d-flex flex-wrap justify-content-between">
                          <div>
                            <input type="checkbox" required className="d-inline" />
                            <span className="label-body ">Remember Me</span>
                          </div>

                          <div id="passwordHelpBlock" className="form-text ">
                            <a href="#" className="text-primary  fw-bold"> Forgot Password?</a>
                          </div>
                        </label>
                        <div className="d-grid my-3">
                          <button type='submit' className="btn btn-dark btn-lg rounded-1">Sign Up</button>
                        </div>

                      </div>
                    </form>

                  </div>
                </div>
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
                <img src={`/src/assets/images/insta${num}.jpg`} alt="insta-img" className="img-fluid rounded-3" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Authen
