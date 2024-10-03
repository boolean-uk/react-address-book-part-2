import { Context } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function ContactItem({
    contactItem: { id, firstName, lastName, street, city }
}) {
    return (
        <li>
        <article className="name">
          {/* <h1>{firstName} {lastName}</h1> */}
          <h1>
                    <Link to={`/contacts/${id}`}>{firstName} {lastName}</Link>
                </h1>
        </article>
      </li>
    );
}