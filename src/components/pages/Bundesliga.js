import React from "react";
import { Link } from "react-router-dom";
import background from "../atoms/images/background.jpg";
import styles from "./Bundesliga.css";

export default function Bundesliga() {
  return (
    <div className="">
      <div className="absolute -z-50 object-cover ">
        <img className="h-screen w-screen" src={background} alt="Background" />
      </div>
      <div className={styles.title}> Bundes</div>
      <div className="text-white "> Liga</div>
      <div>
        <Link className="text-white" to="/Table">
          Table
        </Link>
      </div>
    </div>
  );
}
