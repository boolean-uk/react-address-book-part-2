import { useEffect, useState } from "react";
import ContactListItem from "./ContactListItem";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/maritmoe/contact`)
      .then((response) => response.json())
      .then(setContacts);
  }, [contacts]);

  return (
    <ul className="contact-list">
      {contacts.map((contact, index) => (
        <ContactListItem key={index} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
