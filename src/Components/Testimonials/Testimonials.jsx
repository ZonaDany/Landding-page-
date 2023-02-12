import React from "react";

import "./Testimonials.css";

import User from "../../assets/img/User.png";
import User2 from "../../assets/img/User2.png";

export default function Testimonials() {
  return (
    <div>
      <div className="testimonial">
        <div className="card-testimonial">
          <div className="person">
            <img
              src={User}
              alt="User-img"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
          <div className="history">
            <h1>Justin Martinez</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed
              accusamus sit minima nesciunt et! Aperiam, minima eos tempore amet
              magnam molestiae blanditiis accusantium, rem consequuntur
              quibusdam illo, odio doloremque.
            </p>
          </div>
        </div>
        <div className="card-testimonial">
          <div className="person">
            <img
              src={User2}
              alt="User-img"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
          <div className="history">
            <h1>Blanca Wallapop</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sed
              accusamus sit minima nesciunt et! Aperiam, minima eos tempore amet
              magnam molestiae blanditiis accusantium, rem consequuntur
              quibusdam illo, odio doloremque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
