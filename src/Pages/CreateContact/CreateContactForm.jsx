import React, { useState } from 'react';
import './CreateContactForm.css'
import { createContact } from '../../Toolbox/api';
import { useNavigate } from 'react-router-dom';

function CreateContactForm({updateContacts}) {
  const navigate = useNavigate()
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Data:', formData);
    createContact(formData)
      .then(updateContacts)
      

    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      street: '',
      city: '',
    });

    navigate("/")
  };

  return (
    <div className="create-contact-form">
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Street:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateContactForm;
