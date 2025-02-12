import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../App";

function CreateContact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });
  const navigate = useNavigate();
  const apiUrl = useContext(ApiContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}/contact/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => navigate("/"))
      .catch((error) => console.error("Error creating contact:", error));
  };

  return (
    <div>
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateContact;
