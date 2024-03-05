import React from 'react';
import { useParams } from 'react-router-dom';

function ContactDetails({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === parseInt(id));

  console.log(contact)
  return (
    <div>
      <h2>Contact Details</h2>
      {contact ? (
        <>
          <p>{contact.firstName} {contact.lastName}</p>
          <p>{contact.street}, {contact.city}</p>
        </>
      ) : (
        <p>Contact not found</p>
      )}
    </div>
  )
}

export default ContactDetails;