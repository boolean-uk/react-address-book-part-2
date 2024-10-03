import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../App.jsx";

export default function ContactList() {
  const { contacts } = useContext(GlobalContext);

  if (!contacts || contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link to={`/View/${contact.id}`}>
            {contact.firstName} {contact.lastName}
          </Link>
        </li>
      ))}
    </ul>
  );
}
