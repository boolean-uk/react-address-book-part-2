import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-api-server.fly.dev/toege/contact")
      .then((response) => response.json())
      .then(setContacts);
  }, [contacts]);

  return (
    <main>
      <div>
        <ul>
          <h1>Contacts</h1>
        </ul>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <div>
                <h3>
                  {contact.firstName} {contact.lastName} {"  "}
                <Link to={`/contact/${contact.id}`}>View</Link>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ContactList;
