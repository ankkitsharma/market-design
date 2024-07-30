import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.HeroContainer}>
        <div className={styles.Vertical + " " + styles.Hero}>
          <div className={styles.Up + " " + styles.moving}>
            Marketing
            <img className={styles.hLine1} src="horizontalLine.png" />
          </div>
          <div className={styles.DownContainer}>
            <div className={styles.Down + " " + styles.Horizontal}>
              <div className={styles.Vertical + " " + styles.ForBy}>
                <div>for</div>
                <div>by</div>
              </div>
              <div className={styles.Artists}>Artists</div>
              <img className={styles.hLine2} src="horizontalLine.png" />
            </div>
            <div className={styles.mgAuto}>Creative Mind, Creative Works</div>
          </div>
        </div>
        <img className={styles.vLine1} src="verticalLine.png" />
        <img className={styles.vLine2} src="verticalLine.png" />
      </div>
      <div className={styles.HeroBottom}>
        <div>
          modern <span className={styles.Highlight}>problem</span> requires
          modern <span className={styles.Highlight}>solution</span>
        </div>
        <button className={styles.Connect + " " + styles.rotate}>
          <span>Let's Connect</span>
          <img src="arrow.png" />
        </button>
      </div>
    </>
  );
}
