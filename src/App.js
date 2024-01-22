import React from "react";
import PeopleContainer from "./components/PeopleContainer";
import Card from "components/Card.";
import Button from "components/Button";

function App() {
  return (
    <div className="flex-row">
      <PeopleContainer />
      <Card name="" title="" imageUri="" />

      <Button />
    </div>
  );
}

export default App;
