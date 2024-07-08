import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "",
    latitude: "",
    longitude: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://boolean-uk-api-server.fly.dev/Olaolumcpaul/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error adding contact:", error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create Contact</h2>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Street</label>
          <input
            type="text"
            name="street"
            value={form.street}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={form.state}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Latitude</label>
          <input
            type="text"
            name="latitude"
            value={form.latitude}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Longitude</label>
          <input
            type="text"
            name="longitude"
            value={form.longitude}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default AddContact;
