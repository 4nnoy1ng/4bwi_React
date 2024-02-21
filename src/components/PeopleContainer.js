import React from "react";
import Card from "components/Card";

export default function PeopleContainer() {
  return (
    <div>
      <h1>People</h1>
      <div>
        <Card
          name="hans"
          title="ceo"
          imageUri="https://picsum.photos/200/300"
        />
      </div>
    </div>
  );
}
