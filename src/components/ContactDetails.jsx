import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";

const ContactDetails = () => {
  const [contact, setContact] = useState(null);
  const [editedContact, setEditedContact] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://boolean-api-server.fly.dev/OsamahAlmaliki/contact/${id}`)
        .then((response) => {
          setContact(response.data);
          setEditedContact({ ...response.data });
        })
        .catch((error) => {
          console.error("Error fetching contact details:", error);
        });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleUpdateContact = () => {
    axios
      .put(
        `https://boolean-api-server.fly.dev/OsamahAlmaliki/contact/${id}`,
        editedContact
      )
      .then((response) => {
        console.log("Updated contact:", response.data);
        setContact(editedContact);
        // Navigate back to the single contact details view
        navigate(`/contact/${id}/details`);
      })
      .catch((error) => {
        console.error("Error updating contact:", error);
      });
  };

  const handleDeleteContact = () => {
    axios
      .delete(`https://boolean-api-server.fly.dev/OsamahAlmaliki/contact/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error deleting contact:", error);
      });
  };

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="contact-details">
      <button onClick={handleBackButtonClick}>Back to Contact List</button>
      <h2>Contact Details</h2>
      {contact && (
        <div>
          <p>First Name: {contact.firstName}</p>
          <p>Last Name: {contact.lastName}</p>
          <p>Street: {contact.street}</p>
          <p>City: {contact.city}</p>
          <h3>Edit Contact</h3>
          <form>
            <input
              type="text"
              name="firstName"
              value={editedContact.firstName || ""}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              value={editedContact.lastName || ""}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="street"
              value={editedContact.street || ""}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              value={editedContact.city || ""}
              onChange={handleInputChange}
            />
            <button type="button" onClick={handleUpdateContact}>
              Update Contact
            </button>
          </form>
          <button onClick={handleDeleteContact} className="delete-button">
            Delete Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
