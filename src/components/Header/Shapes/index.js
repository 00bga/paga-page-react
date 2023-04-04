import React, { useEffect, useRef, useState } from "react";
import styles from "./Shapes.module.css";

function Shapes() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shapesRef = useRef([]);

  useEffect(() => {
    const shapes = shapesRef.current;
    const gravity = 0.05;
    const bounce = 0.3;

    shapes.forEach((shape) => {
      let position = shape.getBoundingClientRect().top;
      let velocity = 0;

      function animate() {
        velocity += gravity;
        position += velocity;

        const screenWidth = window.innerWidth;
        let maxPosition = 907;
        if (screenWidth <= 375) {
          maxPosition = 812;
        }

        if (position >= maxPosition - shape.offsetHeight) {
          position = maxPosition - shape.offsetHeight;
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
    <>
      <div
        className={`${styles.shape} ${styles.circle}`}
        ref={(el) => (shapesRef.current[0] = el)}
      >
        <img src={"/assets/SVGs/shapes/Ellipse 1.svg"}></img>
      </div>
      <div
        className={`${styles.shape} ${styles.rectangle}`}
        ref={(el) => (shapesRef.current[1] = el)}
      >
        <img src="/assets/SVGs/shapes/Rectangle 11.svg"></img>
      </div>
      <div
        className={`${styles.shape} ${styles.hexagon}`}
        ref={(el) => (shapesRef.current[2] = el)}
      >
        <img src="/assets/SVGs/shapes/Frame 11.svg"></img>
      </div>
      <div
        className={`${styles.shape} ${styles.oval}`}
        ref={(el) => (shapesRef.current[3] = el)}
      >
        <img src="/assets/SVGs/shapes/Ellipse 5.svg"></img>
      </div>
      <div
        className={`${styles.shape} ${styles.parallelogram}`}
        ref={(el) => (shapesRef.current[4] = el)}
      >
        <img
          src={
            isMobile
              ? `/assets/SVGs/shapes/Rectangle 13.svg`
              : `/assets/SVGs/shapes/Rectangle 12.svg`
          }
        ></img>
      </div>
    </>
  );
}

export default Shapes;
