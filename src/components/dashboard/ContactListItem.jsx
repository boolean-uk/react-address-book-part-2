import React from 'react';
import { Link } from 'react-router-dom';

function ContactListItem({ contact }) {
  return (
    <li>
      <Link to={`/contact/${contact.id}`}>
        {contact.firstName} {contact.lastName}
      </Link>
    </li>
  );
}

export default ContactListItem;