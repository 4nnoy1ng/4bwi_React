import React from "react";
import { Link } from "react-router-dom";
import background from "../atoms/images/background.jpg";

export default function Bundesliga() {
  return (
    <div className="no-scrollbar">
      <div className="absolute -z-50 object-cover ">
        <img className="h-screen w-screen" src={background} alt="Background" />
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
