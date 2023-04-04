import React, { useState, useEffect } from "react";
import styles from "./TextImage.module.css";

function TextImage({ texts, years }) {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const handleMouseMove = (event) => {
    setImagePosition({ x: event.clientX, y: event.clientY });
  };

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

  return (
    <div>
      {texts.map((text, index) => (
        <div
          key={index}
          className={styles.textImage}
          onMouseMove={handleMouseMove}
        >
          <div className={styles.description}>
            <h2>{text}</h2>
            <p>{years[index]}</p>
          </div>
          <img
            src={`/assets/Images/image-${index}.jpg`}
            alt={`Image ${index}`}
            style={{
              position: "absolute",
              bottom: `calc(100% - ${imagePosition.y}px)`,
              left: isMobile ? "" : `${imagePosition.x}px`,
              width: isMobile ? "100vw" : "36.8rem",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default TextImage;
