import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/contacts/${id}`)
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error('Error fetching contact:', error));
  }, [id]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{contact.name}</h1>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <Link to="/contacts">Back to Contacts List</Link>
    </div>
  );
}

export default ContactDetails;
