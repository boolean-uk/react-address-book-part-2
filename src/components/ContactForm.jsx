import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ onContactCreated }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { firstName, lastName, street, city };

    axios
      .post(
        "https://boolean-api-server.fly.dev/OsamahAlmaliki/contact",
        newContact
      )
      .then((response) => {
        onContactCreated();
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating contact:", error);
      });
  };

  return (
    <div>
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ContactForm;
