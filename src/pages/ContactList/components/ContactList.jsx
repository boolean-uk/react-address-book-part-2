import React from 'react';
import ContactListItem from './ContactListItem'; // Import the ContactListItem component

function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact, index) => (
          <ContactListItem key={index} contact={contact} onDelete={onDelete} /> // Use the ContactListItem component, Pass onDelete function
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
