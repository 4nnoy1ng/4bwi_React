import React from "react";

export default function Card({ name, title, imageUri }) {
  return (
    <div className="border flex h-40">
      <div className="flex-1">
        <h2>{name}</h2>
        <h4>{title}</h4>
      </div>

      <div>
        <img src={imageUri} alt="" className="object-cover w-full h-full"></img>
      </div>
    </div>
  );
}
