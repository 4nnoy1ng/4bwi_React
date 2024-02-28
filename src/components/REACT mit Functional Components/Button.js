import React from "react";

export default function Button() {
  function handleClick() {
    alert("This is a alert");
  }
  return (
    <button
      id="alertButton"
      className="bg-green-400 py-3 px-6 my-3 mx-3"
      onClick={() => {
        handleClick();
      }}
    >
      Sendar{" "}
    </button>
  );
}
