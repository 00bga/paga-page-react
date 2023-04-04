import React from "react";
import styles from "./Carousel.module.css";

function Carousel() {
  return (
    <div className={styles.slide}>
      <div className={`${styles.item} ${styles.direction}`}>Art Direction</div>
      <div className={`${styles.item} ${styles.design}`}>UI/UX Design</div>
      <div className={`${styles.item} ${styles.development}`}>
        App Development
      </div>
      <div className={`${styles.item} ${styles.branding}`}>Branding</div>
      <div className={`${styles.item} ${styles.graphic}`}>Graphic Design</div>
      <div className={`${styles.item} ${styles.photography}`}>Photography</div>
    </div>
  );
}

function Slider() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <Carousel />
        <Carousel />
        <Carousel />
        <Carousel />
      </div>
    </div>
  );
}

export default Slider;
