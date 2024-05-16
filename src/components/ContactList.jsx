// src/components/ContactList.jsx
import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, searchTerm, onContactSelect }) {
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onSelect={onContactSelect} />
        ))}
      </ul>
    </div>
  );
}

export default ContactList;