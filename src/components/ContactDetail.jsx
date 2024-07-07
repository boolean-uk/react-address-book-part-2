import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../App.css";

const ContactDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);
  const username = "gent009";
  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`)
      .then((response) => response.json())
      .then((data) => setContact(data));
  }, [id, username]);

  const handleDelete = () => {
    fetch(`https://boolean-uk-api-server.fly.dev/${username}/contact/${id}`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>Contact Details</h1>
      <p>
        <strong>First Name:</strong> {contact.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {contact.lastName}
      </p>
      <p>
        <strong>Street:</strong> {contact.street}
      </p>
      <p>
        <strong>City:</strong> {contact.city}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/contacts/${id}/edit`}>Edit</Link>
    </div>
  );
};

export default ContactDetail;
