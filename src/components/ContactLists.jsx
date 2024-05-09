import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactLists() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/samisalehsaeed/contact`)
      .then((res) => res.json())
      .then(setContacts);
  }, []);
  return (
    <>
      <div>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <strong>Name:</strong> {contact.firstName} {contact.lastName} {""}
              <Link to={`/Address/${contact.id}`}> View </Link>
              <br />
              <strong>Email:</strong> {contact.email}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
