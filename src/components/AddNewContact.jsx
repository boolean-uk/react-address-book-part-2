import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddNewContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://boolean-uk-api-server.fly.dev/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone }),
    })
    .then(response => response.json())
    .then(data => {
      navigate('/contacts');
    })
    .catch(error => console.error('Error adding contact:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Contact</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddNewContact;
