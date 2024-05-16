// src/components/ContactItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function ContactItem({ contact, onSelect }) {
  return (
    <li>
      <Link to={`/contacts/${contact.id}`} onClick={() => onSelect(contact)}>
        {contact.firstName} {contact.lastName}
      </Link>
    </li>
  );
}

export default ContactItem;