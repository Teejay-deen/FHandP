import React from "react";
import Heading from "../common/Heading";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="hero1 shadowLogin ">
        <div className="flex1">
          <div className="logo">
            <img src="./images/logo2.png" alt="" />
          </div>

          <div className="login">
            <form action="" className="shadow">
              <Heading
                title="Sign Up"
                subtitle="Fill in the information  below to get started"
              />

              <div className="input1">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="text" placeholder="Email" />
                <input type="Password" placeholder="Password" />
                <input type="password" placeholder="Confrm Password" />
                <input type="text" placeholder="Referal code" />
              </div>

              <div className="policy">
                {/* <input className="checkbox" type="checkbox" /> */}
                <span>I have read and agree to the <span>privacy policy</span> and <span>term of condition</span></span>
              </div>
              <button className="continuebtn">Continue</button>
              <p className="account">
                Already have an account ? <a href="">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
