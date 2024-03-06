import React from "react";
import { Link } from "react-router-dom";
import ContactItem from "./ContactItem";

function ContactList({ contactList }) {
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      {contactList.length !== 0 ? (
        <ul>
          {contactList.map((contact) => (
            <li key={contact.id}>
              <ContactItem contactItem={contact} />
              <Link to={`/view/${contact.id}`}>View</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found...</p>
      )}
    </div>
  );
}

export default ContactList;
