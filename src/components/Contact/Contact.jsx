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
            <h4>Fillup the form</h4>

            <div>
              <input type="text" placeholder="Name" name="" id="" />
              <input type="email" placeholder="Email" name="" id="" />
            </div>

            <input type="text" placeholder="Subject" />

            <textarea name="" cols="30" rows="10 " id=""></textarea>

            <button>Submit Request</button>
          </form>
        </div>

        <div className="map-section">
          <div className="map-frame">
            
              <iframe
                width="100%"
                height="400"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps trackers</a>
              </iframe>
       
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
