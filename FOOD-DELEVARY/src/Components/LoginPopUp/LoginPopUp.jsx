import React, { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../Assets/assets";

const LoginPopUp = ({ setlogin }) => {
  const [currentState, setcurrentState] = useState("Sign Up");
  return (
    <div className="Login-popup">
      <form className="login-con">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img onClick={() => setlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account? <span onClick={()=>setcurrentState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an accoutn? <span onClick={()=>setcurrentState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
