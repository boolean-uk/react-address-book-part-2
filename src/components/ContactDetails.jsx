import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ApiContext, ContactContext } from "../App";

function ContactDetails() {
  const { id } = useParams();
  const apiUrl = useContext(ApiContext);
  const { contact, setContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const handleUpdate = () => {
    console.log(contact);
    navigate(`/contact/${id}/update`); // Navigate to UpdateContact page
  };

  const handleDelete = () => {
    fetch(`${apiUrl}/contact/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error deleting contact:", error));
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      <iframe
        width="100%"
        height="250"
        src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}
      ></iframe>
    </div>
  );
}

export default ContactDetails;
