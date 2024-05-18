import React from "react";
import "./Contact.css";
import Back from "../common/Back";

const Contact = () => {
  return (
    <div>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Help & Friendly Support"
          cover="../images/banner3.jpg"
        />

        <div className="container">
          <form action="" className="shadow">
            <h4>
             Fillup the form
            </h4>

            <div>
              <input type="text" placeholder="Name" name="" id="" />
              <input type="email" placeholder="Email" name="" id="" />
            </div>

            <input type="text" placeholder="Subject"/>

            <textarea name="" cols='30' rows='10 ' id=""></textarea>

            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
