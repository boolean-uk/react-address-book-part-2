import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch("https://boolean-uk-api-server.fly.dev/uthmel/contact/");
      const data = await response.json(); 
      setContacts(data); 
      console.log(data); 
    } catch (error) {
      console.log("Failed to fetch contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []); 

  const handleDelete = async (id) => {
    try {
      await fetch(`https://boolean-uk-api-server.fly.dev/uthmel/contact/${id}`, {
        method: 'DELETE',
      });
      setContacts(contacts.filter(contact => contact.id !== id)); 
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="contacts">
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.firstName} {contact.lastName}</span>
            <Link to={`/contact/${contact.id}`}>View</Link>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;







