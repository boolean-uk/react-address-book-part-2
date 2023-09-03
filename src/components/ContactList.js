
import React from 'react';
import { Link } from 'react-router-dom';

function ContactList({ contacts }) {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link to={`/contact-list/${contact.id}`} state={{ contact }}>
              {contact.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
