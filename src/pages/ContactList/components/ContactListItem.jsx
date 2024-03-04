import React from 'react';
import { Link } from 'react-router-dom';

function ContactListItem({ contact, onDelete }) {
  const handleDelete = () => {
    onDelete(contact.id); // Pass the contact ID to the onDelete function
  };
  return (
    <li>
      <h3>{contact.firstName} {contact.lastName}</h3>
      <Link to={`/view-contact/${contact.id}`}>View</Link>
      <button onClick={handleDelete}>Delete</button> {/* Button to delete the contact */}
    </li>
  );
}

export default ContactListItem;
