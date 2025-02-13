import { useContext } from "react";
import {ContactContext} from "../App"
import { Link } from "react-router";


export default function Dæshboard () {
    const {contacts} = useContext(ContactContext);
    return (
        <>
          <div>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        {contact.firstName} {contact.lastName} <br />
                        <Link to={`/contacts/${contact.id}`}>Profile</Link>
                    </li>
                ))}
            </ul>
          </div>
        </>
      )
}

