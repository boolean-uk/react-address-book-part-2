import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../CreateContact.css";

export default function CreateContact(props) {
  const { setDataFetched } = props;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://boolean-api-server.fly.dev/nicolaiklokmose/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        console.log("Contact created successfully");
        setDataFetched(false);
        // Clear the form after submission
        setFormData({
          firstName: "",
          lastName: "",
          street: "",
          city: "",
        });
      }
      navigate("/");
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Street:
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create Contact</button>
    </form>
  );
}
