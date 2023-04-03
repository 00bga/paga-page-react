import React, { useEffect, useRef } from "react";
import styles from "./Header.module.css";

function Header() {
  const shapesRef = useRef([]);

  useEffect(() => {
    const shapes = shapesRef.current;
    const gravity = 0.1;
    const bounce = 0.3;

    shapes.forEach((shape) => {
      let position = shape.getBoundingClientRect().top;
      let velocity = 0;

      function animate() {
        velocity += gravity;
        position += velocity;

        if (position >= 907 - shape.offsetHeight) {
          position = 907 - shape.offsetHeight;
          velocity *= -bounce;
        }

        shape.style.top = position + "px";

        if (position < window.innerHeight - shape.offsetHeight) {
          requestAnimationFrame(animate);
        }
      }

      animate();
    });
  }, []);

  return (
    <div className={styles.header}>
      <nav>
        <img src="/assets/SVGs/logo.svg"></img>
        <div className={styles.navItems}>
          <a>About</a>
          <a>Selected Works</a>
          <a>Contact</a>
        </div>
        <a className={styles.menu}>Menu</a>
      </nav>
      <div className={styles.mainText}>
        <h1>Praesent Pharetra Turpis Nisi</h1>
        <img
          ref={(el) => (shapesRef.current[0] = el)}
          className={`${styles.shape} ${styles.circle}`}
          src="/assets/SVGs/shapes/Ellipse 1.svg"
        ></img>
        <img
          ref={(el) => (shapesRef.current[1] = el)}
          className={`${styles.shape} ${styles.rectangle}`}
          src="/assets/SVGs/shapes/Rectangle 11.svg"
        ></img>
        <img
          ref={(el) => (shapesRef.current[2] = el)}
          className={`${styles.shape} ${styles.hexagon}`}
          src="/assets/SVGs/shapes/Frame 11.svg"
        ></img>
        <img
          ref={(el) => (shapesRef.current[3] = el)}
          className={`${styles.shape} ${styles.oval}`}
          src="/assets/SVGs/shapes/Ellipse 5.svg"
        ></img>
        <img
          ref={(el) => (shapesRef.current[4] = el)}
          className={`${styles.shape} ${styles.parallelogram}`}
          src="/assets/SVGs/shapes/Rectangle 12.svg"
        ></img>
      </div>
    </div>
  );
}

export default Header;
