import React from "react";
import "./Awards.css";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";

const Awards = () => {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading
            title="Over 1,249,000+ Happy User Bieng With Us Still They Love Our Services"
            subtitle="Our Awards"
          />

          <div className="content grid4 mtop">
            {awards.map((value, index) => {
              return (
                <div className="box" key={index}>
                  <div className="icon">
                    <span>{value.icon}</span>
                  </div>
                  <h1>{value.num}</h1>
                  <p>{value.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Awards;
