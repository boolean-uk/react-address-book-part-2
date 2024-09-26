import React from 'react';
import ContactList from './components/ContactList'; // Import the ContactList component

export default function ContactListPage({ contacts, onDelete }) {
  return (
    <main className="contact-list-layout">
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} /> {/* Render the ContactList component */}
      </section>
    </main>
  );
}
