import React, { useState } from "react";
import {BsEye, BsEyeSlash } from "react-icons/bs"
import facebookLogo from "./Image/fb_logo.png";
import googleLogo from "./Image/google.svg";
import loginImg from "./Image/login-img.png";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="modal-content">
      <div className="modal-header modal-bg">
        <div className="mx-auto">
          <h5 className=" b" id="exampleModalLabel">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </h5>
        </div>
        <button
          type="button"
          className="btn-close d-lg-none"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <button
          type="button"
          className="btn-close rounded-circle  position-absolute bg-white d-none d-lg-block"
          style={{top:"-40px", left:"98%",opacity:"80%", backgroundColor:"rgba(255, 255, 255, 1)"}}
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-md-6">
            <h4 style={{ fontWeight: "bold" }} className=" mb-4">
              Create Account
            </h4>
            <form action="#">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control shadow-none rounded-0"
                  placeholder="First Name"
                  aria-label="Username"
                />
                <input
                  type="text"
                  className="form-control shadow-none rounded-0"
                  placeholder="Last Name"
                  aria-label="Server "
                />
              </div>
              <input
                type="email"
                className="form-control shadow-none rounded-0"
                placeholder="Email"
                aria-label="Server"
              />
              <div className="position-relative">
                <input
                  className="form-control shadow-none rounded-0"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                {showPass ? (
                  <BsEyeSlash 
                    onClick={() => setShowPass(false)}
                    style={{
                      top: 20,
                      right: 25,
                      transform: "translateY(-50%)",
                    }}
                    className="position-absolute d-block cursor-pointer"
                  />
                ) : (
                  <BsEye
                    onClick={() => setShowPass(true)}
                    style={{
                      top: 20,
                      right: 25,
                      transform: "translateY(-50%)",
                    }}
                    className="position-absolute d-block cursor-pointer "
                  />
                )}
              </div>
              <input
                type={showPass ? "text" : "password"}
                className="form-control shadow-none rounded-0"
                placeholder="Confirm Password"
                aria-label="Server"
              />

              <button
                className="btn btn-primary w-100 mt-3 rounded-pill py-2"
                type="button"
              >
                Create Account
              </button>
              <br />
              <div className="mt-3">
                <button type="button" className="btn btn-light w-100 border">
                  <img
                    src={facebookLogo}
                    style={{ width: "25px", height: "25px" }}
                    className="img-fluid"
                    alt=""
                  />{" "}
                  Sign Up With Facebook
                </button>
                <br />
                <button
                  type="button w-100"
                  className="btn btn-light  w-100 mt-2 border"
                >
                  <img
                    style={{ width: "25px", height: "25px" }}
                    src={googleLogo}
                    className="img-fluid"
                    alt=""
                  />{" "}
                  Sign Up With Google
                </button>
                
              </div>
            </form>
          </div>
          <div className="modal-footer col-md-6">
            <p
              className="text-center "
              style={{
                width:"100%",
                fontSize: "13px",
                marginRight: "20px",
              }}
            >
              Already have an account?{" "}
              <a
                href="/signIn"
                data-bs-toggle="modal"
                data-bs-target="#signInModal"
              >
                Sign In
              </a>
            </p>
            <div className="container bg-white d-none d-lg-block" >
            <div className="d-flex justify-content-evenly">
              <img src={loginImg} className="img-fluid" alt="" />
            </div>
            </div>
            
            <p style={{ fontSize: "11px" }} className="mt-5 ">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
