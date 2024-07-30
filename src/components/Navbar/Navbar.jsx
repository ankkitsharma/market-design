import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbar}>
        <a href="#">
          <img src="logo.png" className={styles.logo} />
        </a>
        <div className={styles.navLinks}>
          <a className={styles.navItem} href="#">
            HOME
          </a>
          <a className={styles.navItem} href="#">
            SERVICES
          </a>
          <a className={styles.navItem} href="#">
            FEATURES
          </a>
          <a className={styles.navItem} href="#">
            PORTFOLIO
          </a>
          <a className={styles.navItem} href="#">
            BLOG
          </a>
          <a className={styles.navItem} href="#">
            CONTACT
          </a>
        </div>
      </nav>
    </div>
  );
}
