import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ContactDetails({ contacts, setContacts }) {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();
  const [updatedContact, setUpdatedContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
  });
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    const selectedContact = contacts.find(
      (contact) => contact.id === parseInt(id)
    );
    setContact(selectedContact);
    setUpdatedContact(selectedContact);
  }, [id, contacts]);

  const handleDelete = () => {
    fetch(`https://boolean-api-server.fly.dev/pialoana/contact/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        // Contact successfully deleted, update the contacts state by removing the deleted contact
        setContacts((prevContacts) =>
          prevContacts.filter((c) => c.id !== parseInt(id))
        );
      } else {
        throw new Error("Failed to delete contact");
      }
    });

    navigate("/contact");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const toggleUpdateForm = () => {
    setShowUpdateForm((prev) => !prev); // Toggle the state to show/hide the update form
  };

  const handleUpdate = () => {
    fetch(`https://boolean-api-server.fly.dev/pialoana/contact/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    }).then((response) => {
      if (response.ok) {
        // Contact successfully updated, update the contacts state
        setContacts((prevContacts) =>
          prevContacts.map((c) => (c.id === parseInt(id) ? updatedContact : c))
        );
        navigate(`/contact/${id}`);
        setShowUpdateForm(false);
      } else {
        throw new Error("Failed to update contact");
      }
    });
  };

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <article>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <li>Id: {contact.id}</li>
      <li>Email: {contact.email}</li>
      <li>Street: {contact.street}</li>
      <li>City: {contact.city}</li>
      <button onClick={handleDelete}> Delete </button>
      <button onClick={toggleUpdateForm}> Update </button>
      {showUpdateForm && ( // Render the update form only if showUpdateForm is true
        <form>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={updatedContact.firstName}
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={updatedContact.lastName}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={updatedContact.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Street:
            <input
              type="text"
              name="street"
              value={updatedContact.street}
              onChange={handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={updatedContact.city}
              onChange={handleChange}
            />
          </label>
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
        </form>
      )}
    </article>
  );
}

export default ContactDetails;
