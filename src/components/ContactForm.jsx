import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

const ContactForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });
  const username = "gent009";

  useEffect(() => {
    if (id) {
      fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`)
        .then((response) => response.json())
        .then((data) => setContact(data));
    }
  }, [id, username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? "PUT" : "POST";
    const url = id
      ? `https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`
      : `https://boolean-uk-api-server.fly.dev/${username}/contact`;

    fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    }).then(() => navigate("/"));
  };

  return (
    <div className="container">
      <h1>{id ? "Edit" : "Add"} Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="street"
          value={contact.street}
          onChange={handleChange}
          placeholder="Street"
          required
        />
        <input
          type="text"
          name="city"
          value={contact.city}
          onChange={handleChange}
          placeholder="City"
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ContactForm;
