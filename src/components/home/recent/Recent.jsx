import React from "react";
import "./Recent.css";
import RecentCard from "./RecentCard";
import Heading from "../../common/Heading";
import { list } from "../../data/Data";

const Recent = () => {
  return (
    <div>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Check Our Selection Of Finest Properties"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <div className="grid3" style={{ marginTop: "50px" }}>
            {list.map((param) => {
              return <RecentCard param = {param} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recent;

function currency(amount, currency = 'NGN') {
  return amount;
}