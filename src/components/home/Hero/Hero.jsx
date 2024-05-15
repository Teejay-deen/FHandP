import React from "react";
import "./hero.css";
import Heading from "../../common/Heading";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">

          <Heading
            title="Welcome To Felami Housing And Properties"
            subtitle="Real estate Searching Platform to Find The House Of Your Dream Using Our Platform Buy Properties, Sell Properties, Rent Properties and Shortlet"
          />


          <form className="flex">
            <div className="box">
              <span>Looking for</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Location</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Property Size</span>
              <input type="text" placeholder="Property Size" />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input type="text" placeholder="Price Range" />
            </div>

            <div className="box">
              <h4>Advance Filter</h4>
            </div>

            <button className="btn">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;
