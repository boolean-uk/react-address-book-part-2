import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm(props) {
  const {setContacts} = props
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate()

  const newContact = {
    firstName: firstName,
    lastName: lastName,
    street: street,
    city: city
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (send data to API)
    console.log('Form submitted:', { firstName, lastName, street, city });

    //This line of code return old contacts plus the newly added contacts
    setContacts((oldContacts) => [...oldContacts, {...newContact}])
    
    // Clear form fields
    setFirstName('');
    setLastName('');
    setStreet('');
    setCity('');
    navigate("/contact-list")
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <label htmlFor="street">Street:</label>
      <input
        type="text"
        id="street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        required
      />

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default ContactForm;
