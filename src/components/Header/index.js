import React from "react";
import styles from "./Header.module.css";
import Shapes from "./Shapes";

function Header() {
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
        <Shapes />
      </div>
    </div>
  );
}

export default Header;
