import React from "react";
import styles from "./SelectedWorks.module.css";
import TextImage from "./TextImage";

function SelectedWorks() {
  const parameters = {
    texts: [
      "Mauris ligula elit",
      "Nullam varius",
      "Nunc et turpis nec",
      "Ut iaculis purus",
      "Praesent nisl nis",
    ],
    years: [2013, 2015, 2014, 2013, 2016],
  };

  return (
    <div className={styles.selectedWorks}>
      <h3>Selected Works</h3>
      <div className={styles.textImageWrapper}>
        <TextImage texts={parameters.texts} years={parameters.years} />
      </div>
    </div>
  );
}

export default SelectedWorks;
