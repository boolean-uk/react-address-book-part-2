import React from "react";
import { Link } from "react-router-dom";

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <h2 className="p-4">Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName} {""}
            <Link to={`/contacts/${contact.id}`}>View</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
