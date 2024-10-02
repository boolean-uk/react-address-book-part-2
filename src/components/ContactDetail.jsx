import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AddressBookContext } from '../App';


function ContactDetail() {
  const {contacts} = useContext(AddressBookContext);
  const { id } = useParams();
  const contact = contacts.find(contact => contact.id === parseInt(id));

  if (!contact) {
    return <p>Contact not found</p>;
  }

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Email: {contact.email}</p>
      <p>City: {contact.city}</p>
      <p>Gender: {contact.gender}</p>
      <p>Job Title: {contact.jobTitle}</p>
      <p>Latitude: {contact.latitude}</p>
      <p>Longitude: {contact.longitude}</p>
      <p>Street: {contact.street}</p>
    </div>
  );
}

export default ContactDetail;

