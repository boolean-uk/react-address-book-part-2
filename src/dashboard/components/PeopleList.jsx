import { useContext, useEffect, useState } from "react";
import PeopleListItem from "./PeopleListItem";
import { MyPeopleContext } from "../../App";
import { useParams } from "react-router-dom";

export default function PeopleList() {
  const myPeople = useContext(MyPeopleContext);

  return (
    <ul className="peopleUL">
      {myPeople.people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  );
}
