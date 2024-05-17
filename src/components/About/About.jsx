import React from "react";
import "./About.css";
import Back from "../common/Back";
import Heading from "../common/Heading";
import { AboutImg, city, list } from "../data/Data";
import Testimonial from "../home/Testimonial/Testimonial";


const About = () => {
  return (
    <div>
      <section className="about ">
        <Back
          name="About Us"
          title="About Us - Who We Are?"
          cover="../images/banner3.jpg"
        />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Our Company Story" subtitle="WHO WE ARE" />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>

            <button className="btn2">More About Us</button>
          </div>

          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="services ">
        <div className="container flex mtop">
          <div className="left2 row2">
            <Heading title="Services" subtitle="WHAT WE DO" />

            <div className="img grid2 mtop">
              {AboutImg.map((items, index) => {
                return (
                  <div className="box" key={index}>
                    <div className="img">
                      <img src={items.cover} alt="" />

                      <div className="overlay">
                        <h5>{items.name}</h5>
                        <p>
                          <label htmlFor="">{items.type}</label>
                          <label htmlFor="">{items.Offices}</label>
                          <label htmlFor="">{items.Apartments}</label>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="right2 row2">
            <div className="grid2 mtop">
              {city.map((value, index) => {
                return (
                  <div className="box" key={index}>
                    <div className="img2">
                      <img src={value.cover} alt="" />
                      <div className="overlay">
                        <h5>{value.name}</h5>
                        <p>
                          <label htmlFor="">{value.type}</label>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Testimonial />
        
      </section>
    </div>
  );
};

export default About;
