import { useEffect, useState } from "react";
import Contact from "./Contact";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const response = await fetch(
      "https://boolean-api-server.fly.dev/Sabbasn/contact"
    );
    const data = await response.json();
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ul className="ab-list">
      <h1>Contacts</h1>
      {contacts &&
        contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
}
