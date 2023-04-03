import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <footer>
      <div className={styles.footerContentWrap}>
        <div className={styles.paga}>
          <img src="/assets/SVGs/Frame-white.svg"></img>
          <div className={styles.address}>
            <p>2425 E Camelback Rd</p>
            <p>Suite 150, Phoenix, AZ 85016</p>
          </div>
          <p>info@paga.com</p>
        </div>
        <div className={styles.menuSocialsWrap}>
          <div className={styles.menu}>
            <h3>Menu</h3>
            <div className={styles.quickLinks}>
              <a>About</a>
              <a>SelectedWorks</a>
              <a>Contact</a>
            </div>
          </div>
          <div className={styles.followUs}>
            <h3>Follow us</h3>
            <div className={styles.socials}>
              <a href="https://www.instagram.com/" target="_blank">
                <img src="/assets/SVGs/instagram.svg"></img>
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img src="/assets/SVGs/facebook.svg"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default About;
