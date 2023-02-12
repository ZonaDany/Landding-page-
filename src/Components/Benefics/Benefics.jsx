import React from "react";

import "./Benefics.css";

////Images
import Design from "../../assets/img/Design.png";
import Responsive from "../../assets/img/Responsive.png";
import Time from "../../assets/img/Time.png";

export default function Benefics() {
  return (
    <>
      <div className="benefics">
        <h1>Desarrolamos lo mejor para ti</h1>
        <div className="points-benefics">
          <div className="card">
            <img
              src={Responsive}
              alt="icon-"
              data-aos="fade-down"
              data-aos-duration="2000"
            />
            <p>
              El mejor diseño responsive probable para mejorar la experiencia
              del usuario
            </p>
          </div>
          <div className="card">
            <img
              src={Design}
              alt="icon-"
              data-aos="fade-down"
              data-aos-duration="2000"
            />
            <p>
              Diseñamos a la medida de la pagina para lograr la atraccion del
              publico y mejorar el visual de la pagina
            </p>
          </div>
          <div className="card">
            <img
              src={Time}
              alt="icon-"
              data-aos="fade-down"
              data-aos-duration="2000"
            />
            <p>
              Entregamos a tiempo y con el mejor tiempo de ejeucion y de
              procesos
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
