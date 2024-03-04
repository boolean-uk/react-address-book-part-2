import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ContactDetails() {
  const { id } = useParams(); // Get the contact ID from URL params
  const [contact, setContact] = useState(null);

  useEffect(() => {
    // Fetch contact details based on the ID
    fetch(`https://boolean-api-server.fly.dev/santhia97/contact/${id}`)
      .then(response => response.json())
      .then(data => setContact(data))
      .catch(error => console.error('Error fetching contact details:', error));
  }, [id]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <p>First Name: {contact.firstName}</p>
      <p>Last Name: {contact.lastName}</p>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
      <Link to={`/edit/${contact.id}`} state={{contact: contact}} >Update contact</Link>
    </div>
  );
}

export default ContactDetails;
