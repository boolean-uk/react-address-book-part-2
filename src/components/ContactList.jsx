import { useState } from "react";
import { Link } from "react-router-dom";

const ContactList = ({ contacts }) => {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="contact-list">
      <input
        type="text"
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredContacts.map((contact) => (
        <div key={contact.id}>
          <Link to={`/contact/${contact.id}`}>
            {contact.firstName} {contact.lastName}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
