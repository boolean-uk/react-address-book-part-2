import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditContactForm({ contacts, onUpdate}) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  useEffect(() => {
    if (contacts && id) {
      const contact = contacts.find((item) => Number(item.id) === Number(id));
      if (contact) {
        setFormData(contact);
      }
    }
  }, [contacts, id]);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onUpdate(id, formData)
      .then(() => {
        navigate(`/view/${id}`);
      })
      .catch((error) => console.error("Error updating contact", error));
  };

  return (
    <>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            name="firstName"
            type="text"
            onChange={handleChange}
            value={formData.firstName}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formData.lastName}
          />
        </label>
        <br />
        <label>
          Street:
          <input
            name="street"
            type="text"
            onChange={handleChange}
            value={formData.street}
          />
        </label>
        <br />
        <label>
          City:
          <input
            name="city"
            type="text"
            onChange={handleChange}
            value={formData.city}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default EditContactForm;
