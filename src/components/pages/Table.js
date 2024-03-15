import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Table.module.css";
import background from "../atoms/images/background.jpg";
import styless from "./Bundesliga.module.css";
import TableRow from "./TableRow";

export default function Bundesliga() {
  const [footballTable, setFootballTable] = useState([]);
  useEffect(() => {
    loadTable();
  }, []);

  const loadTable = () => {
    fetch("https://api.openligadb.de/getbltable/öbl1/2023").then((res) =>
      res.json().then((result) => {
        console.log(result);
        setFootballTable(result);
      })
    );
  };

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

        <div className={styles.Tabellen}>
          {footballTable.map((team) => (
            <TableRow team={team} />
          ))}
        </div>
      </div>
      <Link className={styless.Tabellen} to="/">
        Bundesliga
      </Link>
    </div>
  );
}
