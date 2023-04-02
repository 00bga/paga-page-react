import React from "react";
import styles from "./Services.module.css";
import Carousel from "./Carousel";

function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.servicesDesc}>
        <div className={styles.sevicesDescText}>
          <h3>Services</h3>
          <p>
            Fusce ipsum odio, eleifend non massa cursus, luctus dapibus dui. Ut
            ac venenatis ex, vel bibendum felis. Pellentesque sollicitudin nec
            mi a viverra.
          </p>
        </div>
        <img
          src="/assets/SVGs/dodecagon.svg"
          className={styles.dodecagon}
        ></img>
      </div>
      <Carousel />
    </div>
  );
}

export default Services;
