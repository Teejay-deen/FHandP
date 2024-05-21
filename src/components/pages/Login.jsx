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
            <form action="">
    
                <Heading
                  title="Sign Up"
                  subtitle="Fill in the information  below to get started"
                />
              

            
                <input type="text" placeholder="First Nmae" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Confrm Password" />
                <input type="text" placeholder="Referal code" />

     
            </form>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
