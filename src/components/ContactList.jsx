import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ENDPOINTS } from '../config';

function ContactList({ contacts, setContacts }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(ENDPOINTS.contacts);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const filteredContacts = contacts.filter(contact => 
    `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-list">
      <h1>Contacts</h1>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {filteredContacts.map(contact => (
        <Link key={contact.id} to={`/contact/${contact.id}`}>
          <div className="contact-item">
            {contact.firstName} {contact.lastName}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ContactList; 