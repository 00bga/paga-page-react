import React, { useState } from "react";
import styles from "./TextImage.module.css";

function TextImage({ texts, years }) {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setImagePosition({ x: event.clientX, y: event.clientY });
  };

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
              left: `${imagePosition.x}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default TextImage;
