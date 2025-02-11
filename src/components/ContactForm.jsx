import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ENDPOINTS } from '../config';

function ContactForm({ setContacts }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    email: '',
    phoneNumber: '',
    latitude: '',
    longitude: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(ENDPOINTS.contacts, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const newContact = await response.json();
      setContacts(prev => [...prev, newContact]);
      navigate('/');
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Contact</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Street:</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Latitude:</label>
        <input
          type="number"
          step="any"
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Longitude:</label>
        <input
          type="number"
          step="any"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Create Contact</button>
    </form>
  );
}

export default ContactForm; 