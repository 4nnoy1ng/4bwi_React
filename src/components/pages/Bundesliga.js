import React from "react";
import { Link } from "react-router-dom";
import background from "../atoms/images/background.jpg";

export default function Bundesliga() {
  return (
    <div>
      <div className="absolute -z-50">
        <img className="bg-contain" src={background} alt="Background" />
      </div>
      <div className="text-white">
        <h1>Bundesliga</h1>
        <Link className="" to="/Table">
          Table
        </Link>
      </div>
    </div>
  );
}
