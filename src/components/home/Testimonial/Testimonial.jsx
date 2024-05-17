import React from "react";
import "./Testimonial.css";
import Heading from "../../common/Heading";
import { testimonials } from "../../data/Data";

const Testimonial = () => {
  return (
    <div>
      <section className="testimonial ">
        <div className="container">
          <Heading title="Testimonials" subtitle="What Our Clients Say" />

          <div className="content grid3 mtop">
            {testimonials.map((items, index) => {
              return (
                <div className="box" key={index}>
                  <div className="details">
                    <p className="icon">{items.icon}</p>
                    <p className="message">{items.message}</p>
                    <div className="user flex">
                      <img src={items.cover} alt="" />
                      <p> by <span>{items.name}</span></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
