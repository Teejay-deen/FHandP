import React, { useState } from "react";
import Heading from "../common/Heading";
import "./Login.css";

const Login = () => {
  const Login = "Login";
  const SignUp = "Sign Up";

  const [currState, setCurrState] = useState(Login);
  return (
    <div>
      <div className="hero1 shadowLogin ">
        <div className="flex1">
          <div className="logo">
            <img src="./images/logo2.png" alt="" />
          </div>

          <div className="login">
            <form action="" className="shadow">
              {/* <Heading title={currState} subtitle= 'Fill in the information below to get started' /> */}

              <div className="login-title">
                <h2>{currState}</h2>
                <p>Fill in the information below to get started</p>
              </div>

              <div className="input1">
                {currState === Login ? (
                  <></>
                ) : (
                  <>
                    <input type="text" placeholder="First name" required />
                    <input type="text" placeholder="Last name" required />
                    <input type="password" placeholder="Confrm Password" required/>
                    <input type="text" placeholder="Referal code" />
                  </>
                )}

                <input type="text" placeholder="Email" required />
                <input type="Password" placeholder="Password" required />
              </div>
                

              <div className="policy">
                {/* <input className="checkbox" type="checkbox" /> */}
                <span>
                  I have read and agree to the <span>privacy policy</span> and{" "}
                  <span>term of condition</span>
                </span>
              </div>

              <div className="btn-flex">
                <button className="continuebtn">
                  {currState === SignUp ? "Continue" : "Login"}
                </button>

                {currState === Login ? (
                  <>
                    <button className="googlebtn">

                      <i
                        class="fa-brands fa-google"
                        style={{ width: "20px", height: "20px" }}
                      ></i>
                      Continue with Google
                    </button>
                    <button className="facebookbtn">
                 
                      <i
                        class="fa-brands fa-facebook"
                        style={{ width: "20px", height: "20px" }}
                      ></i>
                      Continue with Facebook
                    </button>
                    <button className="applebtn">
                   
                      <i
                        class="fa-brands fa-apple"
                        style={{ width: "20px", height: "20px" }}
                      ></i>
                      Continue with Apple
                    </button>
                    <p>
                      Create new account ?{" "}
                      <span
                        className="span1"
                        onClick={() => setCurrState(SignUp)}
                      >
                        Click here!
                      </span>
                    </p>
                  </>
                ) : (
                  <p>
                    Already have an account ?{" "}
                    <span className="span1" onClick={() => setCurrState(Login)}>
                      Login here
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
