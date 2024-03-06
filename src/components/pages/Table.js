import React from "react";
import { Link } from "react-router-dom";
import background from "../atoms/images/background.jpg";
import styles from "./Tabellen.module.css";

export default function Bundesliga() {
  return (
    <div className="no-scrollbar">
      <div className="absolute -z-50 object-cover ">
        <img className="h-screen w-screen" src={background} alt="Background" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.source}>ADMIRALBundesliga</div>
          <div className={styles.date}>Season 2023/24</div>
        </div>

        <div className={styles.SecondHeader}>
          <div className={styles.Verein}>Verein</div>
          <div className={styles.Games}> Spiele</div>
          <div className={styles.Sieg}>S</div>
          <div className={styles.Unentschieden}>U</div>
          <div className={styles.Niederlage}>N</div>
          <div className={styles.Tore}>Tore</div>
          <div className={styles.Punkte}>Punkte</div>
        </div>

        <div className={styles.SecondHeader}>
          <div className={styles.Verein}>Verein</div>
          <div className={styles.Games}> Spiele</div>
          <div className={styles.Sieg}>S</div>
          <div className={styles.Unentschieden}>U</div>
          <div className={styles.Niederlage}>N</div>
          <div className={styles.Tore}>Tore</div>
          <div className={styles.Punkte}>Punkte</div>
        </div>
      </div>
      <Link className="" to="/">
        Bundesliga
      </Link>
    </div>
  );
}
