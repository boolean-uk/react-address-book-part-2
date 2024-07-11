import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ContactsList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://boolean-uk-api-server.fly.dev/contacts')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setContacts(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }, []);

  return (
    <div>
      <h1>Contacts List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-contact">Add New Contact</Link>
    </div>
  );
}

export default ContactsList;
