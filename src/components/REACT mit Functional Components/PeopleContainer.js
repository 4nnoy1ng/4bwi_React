import React, { useEffect, useState } from "react";
import Card from "components/REACT mit Functional Components/Card";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch("https://65d5ccbcf6967ba8e3bc9d2d.mockapi.io/People").then((res) =>
      res.json().then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      })
    );
  }, []);

  const filterPeople = (filter) => {
    let filtered = people.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPeople(filtered);
  };

  return (
    <div className="">
      <div className="fixed border mb-4 bg-white w-full h-16 p-5">
        <input
          className="border p-4"
          type="text"
          placeholder="Search"
          onChange={(el) => {
            console.log(el.target.value);
            filterPeople(el.target.value);
          }}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32">
        {filteredPeople.map((person) => {
          return (
            <Card
              name={person.name}
              imageUri={person.avatar}
              title={person.jobtitle}
            />
          );
        })}
      </div>
    </div>
  );
}
