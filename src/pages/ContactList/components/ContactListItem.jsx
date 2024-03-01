import React from 'react';
import { Link } from 'react-router-dom';

function ContactListItem({ contact }) {
  return (
    <li>
      <h3>{contact.firstName} {contact.lastName}</h3>
      <Link to={`/view-contact/${contact.id}`}>View</Link>
    </li>
  );
}

export default ContactListItem;
