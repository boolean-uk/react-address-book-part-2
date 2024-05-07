import { useState } from "react";

export default function CreateContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    gender: "",
    email: "",
    jobTitle: "",
    latitude: "",
    longitude: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = await fetch(
      "https://boolean-api-server.fly.dev/MrStashy/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    setFormData({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      gender: "",
      email: "",
      jobTitle: "",
      latitude: "",
      longitude: "",
    });
  }

  return (
    <>
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit} className="create-contact-form">
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={handleChange}
          value={formData.firstName}
          name="firstName"
          type="textbox"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={handleChange}
          value={formData.lastName}
          name="lastName"
          type="textbox"
        />
        <label htmlFor="street">Street</label>
        <input
          onChange={handleChange}
          value={formData.street}
          name="street"
          type="textbox"
        />
        <label htmlFor="city">City</label>
        <input
          onChange={handleChange}
          value={formData.city}
          name="city"
          type="textbox"
        />
        <label htmlFor="gender">Gender</label>
        <input
          onChange={handleChange}
          value={formData.gender}
          name="gender"
          type="textbox"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={formData.email}
          name="email"
          type="textbox"
        />
        <label htmlFor="jobTitle">Occupation</label>
        <input
          onChange={handleChange}
          value={formData.jobTitle}
          name="jobTitle"
          type="textbox"
        />
        <label htmlFor="latitude">Latitude</label>
        <input
          onChange={handleChange}
          value={formData.latitude}
          name="latitude"
          type="textbox"
        />
        <label htmlFor="longitude">Longitude</label>
        <input
          onChange={handleChange}
          value={formData.longitude}
          name="longitude"
          type="textbox"
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
}
