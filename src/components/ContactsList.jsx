import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactContext } from "../App";


function ContactsList() {
  const { contacts } = useContext(ContactContext);

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link to={`/view/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;