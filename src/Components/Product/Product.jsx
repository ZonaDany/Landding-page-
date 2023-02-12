import React from "react";

import "./Product.css";
import product from "../../assets/img/Product.jpg";

export default function Product() {
  return (
    <>
      <div className="services-products">
        <img
          src={product}
          alt="Service-img"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
        <div className="services">
          <h1>Nuestros Productos</h1>
          <ul>
            <li>Landding page (Basic)</li>
            <li>Landding page (Advance)</li>
            <li>Blog + Mini-Marcket</li>
            <li>Landding + Mini-Marcket</li>
            <li>Marcket place</li>
          </ul>
        </div>
      </div>
    </>
  );
}
