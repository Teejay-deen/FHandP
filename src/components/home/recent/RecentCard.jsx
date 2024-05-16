import React from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  return (
    <div>
      <div className="content grid3 mtop">
        {list.map((value, index) => {
          const { cover, category, location, star, name, price, type } = value;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>

              
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff98001a",
                    }}
                  >
                    {category}
                  </span>

                  <i className=" fa fa-heart"></i>
                </div>
                <h4>{name}</h4>

                <p>
                    <i className=" fa fa-location-dot"></i>{location}
                </p>

                <p>
                    <i className="fa fa-star">{star}</i>
                </p>
              </div>
              <div className="button flex">
                <div>
                    <button className="btn2">{price}</button>
                    <label htmlFor="">/sqft</label>
                </div>

                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentCard;
