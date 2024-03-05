import { useState } from "react";
import { addContact } from "../../api/ContactAPI";
import { useNavigate } from "react-router-dom";

function CreateContactComponent() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    city: "",
    street: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await addContact(contact);
      console.log("Contact created successfully", data);
    } catch (error) {
      console.error("Failed to create contact", error);
    }

    navigate("/contacts")
  };

  return (
    <div className="createContactForm">
      <form onSubmit={handleSubmit}>
        <label>
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>City</span>
          <input
            type="text"
            name="city"
            value={contact.city}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Street</span>
          <input
            type="text"
            name="street"
            value={contact.street}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateContactComponent;
