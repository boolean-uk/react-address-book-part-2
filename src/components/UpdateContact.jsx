import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateContact = ({ contact }) => {
  const [updatedContact, setUpdatedContact] = useState(contact);
  const navigate = useNavigate();

  const updateContact = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://boolean-api-server.fly.dev/krzysztofmmm/contact/${contact.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContact),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update contact");
    }

    navigate(`/contact/${contact.id}`); // Navigate to the updated contact's details
  };

  const handleChange = (event) => {
    setUpdatedContact({
      ...updatedContact,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={updateContact}>
      <input
        name="firstName"
        value={updatedContact.firstName}
        onChange={handleChange}
      />
      <input
        name="lastName"
        value={updatedContact.lastName}
        onChange={handleChange}
      />
      <button type="submit">Update Contact</button>
    </form>
  );
};

export default UpdateContact;
