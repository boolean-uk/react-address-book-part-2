import React from 'react';
import { Link } from 'react-router-dom';
import ContactProfile from '../ContactProfile';

function ContactsListItem(props) {
  const { contact } = props;

  return (
    <li>
      <h3>
        {contact.firstName} {contact.lastName} 
        <Link to={`/view/${contact.id}`}> View </Link>
      </h3>
    </li>
  );
}

export default ContactsListItem;
