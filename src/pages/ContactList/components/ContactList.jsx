import React from 'react';
import ContactListItem from './ContactListItem'; // Import the ContactListItem component

function ContactList({ contacts }) {
  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact, index) => (
          <ContactListItem key={index} contact={contact} /> // Use the ContactListItem component
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
