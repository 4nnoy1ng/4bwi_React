import React, { useEffect, useState } from "react";
import Card from "components/Card";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://65d5ccbcf6967ba8e3bc9d2d.mockapi.io/People").then((res) =>
      res.json().then((data) => {
        setPeople(data);
      })
    );
  }, []);

  return (
    <div>
      <h1>People</h1>
      <div className="w-40">
        {people.map(person => {
          return (
            <Card
              name={person.name}
              imageUri={person.avatar}
              title={person.jobtitle}
            />
        })}
      </div>
    </div>
  );
}
