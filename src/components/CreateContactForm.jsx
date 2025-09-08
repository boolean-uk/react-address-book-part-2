import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    longitude: 10.00,
    latitude: 60.00
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://boolean-uk-api-server.fly.dev/Chrissivert/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => navigate("/"))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="street"
        placeholder="Street"
        value={formData.street}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Contact</button>
    </form>
  );
}
