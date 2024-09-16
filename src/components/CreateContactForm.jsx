import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContactForm({ addNewContact }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { firstName, lastName, street, city };
    addNewContact(formData).then(() => {
      setFirstName("");
      setLastName("");
      setStreet("");
      setCity("");
      navigate('/contacts');
    });
  };

  return (
    <div className="create-contact-form">
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            name="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Street:
          <input
            name="street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </label>
        <br />
        <label>
          City:
          <input
            name="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateContactForm;
