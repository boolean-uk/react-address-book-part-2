import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const CreateContactForm = ({ addContact }) => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://boolean-api-server.fly.dev/hassanhussa1n/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        const newContact = await response.json();
        addContact(newContact); 
        navigate('/'); 
      } else {
        console.error('Error creating contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating contact:', error.message);
    }
  };

  return (
    <div>
      <h2>Create a Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={contact.firstName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={contact.lastName} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Street:
          <input type="text" name="street" value={contact.street} onChange={handleChange} required />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={contact.city} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Create Contact</button>
      </form>
    </div>
  );
};

export default CreateContactForm;
