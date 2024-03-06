import React from "react";
import { Link } from "react-router-dom";
import background from "../atoms/images/background.jpg";
import styles from "./Bundesliga.css";

export default function Bundesliga() {
  return (
    <div className="no-scrollbar">
      <div className="absolute -z-50 object-cover ">
        <img className="h-screen w-screen" src={background} alt="Background" />
      </div>
      <div className="text-white">
        <h1>Table</h1>
        <Link className="" to="/">
          Bundesliga
        </Link>
      </div>
    </div>
  );
}
