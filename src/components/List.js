import React from "react";

export default function List() {
  function changeBackground(e) {
    e.target.style.background = "red";
  }

  return (
    <ul>
      <li
        onMouseOver={changeBackground}
        className="bg-cyan-500 max-w-36 px-4 py-4 mx-1 m-1"
      >
        Coffee
      </li>
      <li
        onMouseOver={changeBackground}
        className="bg-cyan-500 max-w-36 px-4 py-4 mx-1 m-1"
      >
        Tea
      </li>
      <li
        onMouseOver={changeBackground}
        className="bg-cyan-500 max-w-36 px-4 py-4 mx-1 m-1"
      >
        Beer
      </li>
    </ul>
  );
}
