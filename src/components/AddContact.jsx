// src/components/AddContact.jsx
import React, { useState, useContext } from 'react';
import { AddressBookContext } from '../App';


function AddContact() {
  const { contacts, setContacts } = useContext(AddressBookContext);
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    latitude: 0,
    longitude: 0,
    favouriteColour: '',
    profileImage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { ...contact, id: contacts.length + 1 };
    setContacts([...contacts, newContact]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={contact.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={contact.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={contact.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" value={contact.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Job Title:</label>
        <input type="text" name="jobTitle" value={contact.jobTitle} onChange={handleChange} required />
      </div>
      <div>
        <label>Latitude:</label>
        <input type="number" name="latitude" value={contact.latitude} onChange={handleChange} required />
      </div>
      <div>
        <label>Longitude:</label>
        <input type="number" name="longitude" value={contact.longitude} onChange={handleChange} required />
      </div>
      <div>
        <label>Favourite Colour:</label>
        <input type="text" name="favouriteColour" value={contact.favouriteColour} onChange={handleChange} required />
      </div>
      <div>
        <label>Profile Image URL:</label>
        <input type="text" name="profileImage" value={contact.profileImage} onChange={handleChange} required />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;