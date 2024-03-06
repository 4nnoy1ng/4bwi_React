import React from "react";
import { Link } from "react-router-dom";
import background from "../atoms/images/background.jpg";
import styles from "./Bundesliga.module.css";

export default function Bundesliga() {
  return (
    <div className="">
      <div className="absolute -z-50 object-cover ">
        <img className="h-screen w-screen" src={background} alt="Background" />
      </div>
      <div className={styles.header}>
        <div className={styles.title}> Bundes</div>
        <div className={styles.subtitle}> Liga</div>
        <div className={styles.source}></div>
      </div>

      <div className={styles.footballclubs}>
        <div className={styles.RedBullSalzburg}></div>
        <div className={styles.Graz}></div>
        <div className={styles.LASK}></div>
        <div className={styles.Rapid}></div>
        <div className={styles.Wien}></div>
        <div className={styles.Klagenfurt}></div>
      </div>
      <div>
        <Link className={styles.Tabellen} to="/Table">
          Table
        </Link>
      </div>
    </div>
  );
}
