import React from "react";
import PeopleContainer from "./components/PeopleContainer";
import Card from "components/Card";

function App() {
  return (
    <div className="flex-row">
      <PeopleContainer />
      <Card name="" title="" imageUri="" />
    </div>
  );
}

export default App;
