import React from "react";
import "./Footer.css";
import { footer } from "../../data/Data";

const Footer = () => {
  return (
    <div>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>

            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo2.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>

              <div className="input flex">
                <input type="text" name="" placeholder="Email Address" id="" />
                <button className="btn6">Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((items, index) => {
            return (
              <div className="box" key={index}>
                <h3>{items.title}</h3>
                <ul>
                  {items.text.map((val, i) => (
                    <li key={i}>{val.list}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </footer>

      <div className="legal flex">
        <span>© FHandP - All Rights Reserved</span>
 
      </div>
    </div>
  );
};

export default Footer;
