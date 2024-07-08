import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/Olaolumcpaul/contact")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <input
        type="text"
        placeholder="Filter contacts"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filteredContacts.map((contact) => (
        <div key={contact.id}>
          <span>
            {contact.firstName} {contact.lastName}
          </span>
          <Link to={`/contact/${contact.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
