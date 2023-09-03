import React from 'react';
import { useLocation } from 'react-router-dom';

function ContactDetails() {
  const location = useLocation();
  const { contact } = location.state || {};

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>
        Name: {contact.name}
      </p>
      <p>
        Street: {contact.address.street}
      </p>
      <p>
        City: {contact.address.city}
      </p>
    </div>
  );
}

export default ContactDetails;
