import React from "react";
import styles from "./Table.module.css";

export default function TableRow({ team }) {
  return (
    <div className={styles.SecondHeader}>
      <div className={styles.Verein}>{team.teamName}</div>
      <div className={styles.Games}>{team.matches}</div>
      <div className={styles.Sieg}>{team.won}</div>
      <div className={styles.Unentschieden}>{team.draw}</div>
      <div className={styles.Niederlage}>{team.lost}</div>
      <div className={styles.Tore}>{team.goals}</div>
      <div className={styles.Punkte}>{team.points}</div>
    </div>
  );
}
