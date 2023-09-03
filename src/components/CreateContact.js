import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateContact({ setContacts, contacts }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const fullName = `${formData.firstName} ${formData.lastName}`;
  
    const newContact = {
      id: Math.max(...contacts.map((contact) => contact.id), 0) + 1,
      name: fullName,
      address: {
        street: formData.street,
        city: formData.city,
      },
    };
  
    // Update the local state by adding the new contact
    setContacts((prevContacts) => [...prevContacts, newContact]);
  
    // Clear the form data
    setFormData({
      firstName: '',
      lastName: '',
      street: '',
      city: '',
    });
  
    // Navigate back to the contact list page
    navigate('/contact-list');
  };

  return (
    <div>
      <h2>Create a Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Street:
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Create Contact</button>
      </form>
    </div>
  );
}

export default CreateContact;
