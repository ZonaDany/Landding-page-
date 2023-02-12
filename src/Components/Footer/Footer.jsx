import React from "react";

import "./Footer.css";

////Icons
import logoFooter from "../../assets/img/logo-footer.jpg";
import zero from "../../assets/footer icons/ZERO.png";
import facebook from "../../assets/footer icons/facebook.png";
import instagram from "../../assets/footer icons/instagram.png";
import gmail from "../../assets/footer icons/gmail.png";
import whatsapp from "../../assets/footer icons/whatsapp.png";

export default function footer() {
  return (
    <>
      <div className="footer">
        <div className="mision">
          <h1>Enterprise</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            distinctio explicabo eligendi pariatur, possimus laudantium iste
            recusandae consequuntur et, laboriosam alias iure culpa, vero
            voluptatem blanditiis odit animi nostrum temporibus!
          </p>
          <img
            src={logoFooter}
            alt="logo empresa"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
        <div className="contact">
          <div className="red-social">
            <img src={gmail} alt="red-social" />
            <p>user@example.com</p>
          </div>
          <div className="red-social">
            <img src={facebook} alt="red-social" />
            <p>user</p>
          </div>
          <div className="red-social">
            <img src={instagram} alt="red-social" />
            <p>@user</p>
          </div>
          <div className="red-social">
            <img src={whatsapp} alt="red-social" />
            <p>+57 3234245432</p>
          </div>
        </div>
        <div className="created-by">
          <h1>ZERO</h1>
          <img
            className="zero"
            src={zero}
            alt="logo ZERO"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <div className="red-social">
            <img src={gmail} alt="red-social" />
            <p>user@example.com</p>
          </div>
          <div className="red-social">
            <img src={facebook} alt="red-social" />
            <p>user</p>
          </div>
          <div className="red-social">
            <img src={instagram} alt="red-social" />
            <p>@user</p>
          </div>
          <div className="red-social">
            <img src={whatsapp} alt="red-social" />
            <p>+57 3234245432</p>
          </div>
        </div>
      </div>
    </>
  );
}
