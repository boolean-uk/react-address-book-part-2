
import { Link, useParams } from "react-router-dom";

import { useContext } from "react"
import { MyContext } from "../App"
/* eslint-disable react/prop-types */


function ContactItem() {
    const context = useContext(MyContext)

  const { id } = useParams();

  const person = context.contacts.find((x) => x.id.toString() === id.toString());
  return (
    <>
    <li>

      <h2>{person.firstName } {person.lastName}</h2>
      <p>{person.street}</p>
    </li>

    </>

  )
}

export default ContactItem