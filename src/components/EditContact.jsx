import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    country: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/Olaolumcpaul/contact/${id}`)
      .then((response) => response.json())
      .then((data) =>
        setForm({
          fName: data.firstName,
          lName: data.lastName,
          email: data.email,
          phone: data.phone,
          street: data.street,
          city: data.city,
          state: data.state,
          country: data.country,
          latitude: data.latitude,
          longitude: data.longitude,
        })
      )
      .catch((error) =>
        console.error("Error fetching contact details:", error)
      );
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://boolean-uk-api-server.fly.dev/Olaolumcpaul/contact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: form.fName,
        lastName: form.lName,
        email: form.email,
        phone: form.phone,
        street: form.street,
        city: form.city,
        state: form.state,
        country: form.country,
        latitude: form.latitude,
        longitude: form.longitude,
      }),
    })
      .then(() => navigate(`/contact/${id}`))
      .catch((error) => console.error("Error updating contact:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="fName"
          value={form.fName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lName"
          value={form.lName}
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
      <button type="submit">Update Contact</button>
    </form>
  );
}

export default EditContact;
