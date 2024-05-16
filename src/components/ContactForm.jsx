// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function ContactForm({ onContactAdd, onContactUpdate }) {
  const { id } = useParams();
  const history = useHistory();
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Initialize other contact fields
  });

  useEffect(() => {
    if (id) {
      fetchContactDetails();
    }
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

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await onContactUpdate(contact);
    } else {
      await onContactAdd(contact);
    }
    history.push('/');
  };

  return (
    <div>
      <h2>{id ? 'Edit Contact' : 'Add Contact'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={contact.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={contact.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
          required
        />
        {/* Add other contact fields */}
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default ContactForm;