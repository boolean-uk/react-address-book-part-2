import { useEffect, useState } from "react";
import Contact from "./Contact";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

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

  const filteredContacts = contacts.filter(
    (c) => c.firstName.includes(filter) || c.lastName.includes(filter)
  );

  return (
    <ul className="ab-list">
      <h1>Contacts</h1>
      <input
        className="ab-input"
        placeholder="filter..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {contacts &&
        filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </ul>
  );
}
