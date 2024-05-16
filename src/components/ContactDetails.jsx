// src/components/ContactDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ContactDetails() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchContactDetails();
  }, [id]);

  const fetchContactDetails = async () => {
    try {
      const response = await fetch(`https://boolean-uk-api-server.fly.dev/timsakande/contact/${id}`);
      const data = await response.json();
      setContact(data);
    } catch (error) {
      console.error('Error fetching contact details:', error);
    }
  };

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>First Name: {contact.firstName}</p>
      <p>Last Name: {contact.lastName}</p>
      <p>Email: {contact.email}</p>
      {/* Display other contact details */}
    </div>
  );
}

export default ContactDetails;