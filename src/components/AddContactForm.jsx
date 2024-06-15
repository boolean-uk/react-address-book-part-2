import React, { useState } from 'react';

const AddContactForm = ({ addContact }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ firstName, lastName, street, city });
    setFirstName('');
    setLastName('');
    setStreet('');
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Contact</h2>
      <div>
        <label>First Name:</label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
      </div>
      <div>
        <label>Street:</label>
        <input 
          type="text" 
          value={street} 
          onChange={(e) => setStreet(e.target.value)} 
        />
      </div>
      <div>
        <label>City:</label>
        <input 
          type="text" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default AddContactForm;
