import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContact({ setContacts, contacts }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`;

    const newContact = {
      id: Math.max(...contacts.map((contact) => contact.id), 0) + 1,
      name: fullName,
      address: {
        street: formData.street,
        city: formData.city,
      },
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);

    setFormData({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
    });
    navigate("/contact-list");
  };

  return (
    <div className="menuRight">
      <h1 className="headerRight">Add a New Contact</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            name="street"
            id="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Save Contact</button>
      </form>
    </div>
  );
}

export default CreateContact;
