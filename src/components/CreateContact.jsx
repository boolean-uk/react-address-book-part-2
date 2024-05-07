import { useState } from "react";

export default function CreateContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });
  const [error, setError] = useState(undefined)

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
    if (postData.ok) {
      setError(null)
    }

    setFormData({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
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
        <button type="submit">Create</button>
      </form>
      {error === null && <div>Created Successfully!</div>}
      {error != null && <div>Error!</div>}
    </>
  );
}
