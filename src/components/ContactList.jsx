import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ContactList() {

  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {


    fetch('https://boolean-uk-api-server.fly.dev/alinjo/contact')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setContacts(data);
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
        setError(`Failed to fetch contacts. Error: ${error.message}`);

      });

  }, []);

  if (error) return <div>Error: {error}</div>;

  return (

    <div>
      <h1>Contact List</h1>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <Link to={`/contact/${contact.id}`}>
                {contact.firstName} {contact.lastName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
}

export default ContactList;