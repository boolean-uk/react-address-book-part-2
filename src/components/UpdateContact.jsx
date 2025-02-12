import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiContext, ContactContext } from "../App";

function UpdateContact() {
  const { id } = useParams();
  const { contact, setContact } = useContext(ContactContext);
  const [formData, setFormData] = useState({
    firstName: contact.firstName,
    lastName: contact.lastName,
    street: contact.street,
    city: contact.city,
  });
  const navigate = useNavigate();
  const apiUrl = useContext(ApiContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${apiUrl}/contact/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Contact updated:", result);
        navigate("/contact/" + id);
      })
      .catch((error) => console.error("Error creating contact:", error));
  };

  return (
    <div>
      <h2>Update Contact</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateContact;
