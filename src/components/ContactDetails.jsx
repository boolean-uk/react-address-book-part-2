import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import ContactMap from "./ContactMap";

function ContactDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetch(`https://boolean-uk-api-server.fly.dev/Olaolumcpaul/contact/${id}`)
      .then((response) => response.json())
      .then((data) => setContact(data))
      .catch((error) =>
        console.error("Error fetching contact details:", error)
      );
  }, [id]);

  const handleDelete = () => {
    fetch(`https://boolean-uk-api-server.fly.dev/Olaolumcpaul/contact/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate("/"))
      .catch((error) => console.error("Error deleting contact:", error));
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="contact-details">
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Street: {contact.street}</p>
      <p>City: {contact.city}</p>
      <p>State: {contact.state}</p>
      <p>Country: {contact.country}</p>
      <p>Latitude: {contact.latitude}</p>
      <p>Longitude: {contact.longitude}</p>
      <button onClick={handleDelete}>Delete Contact</button>
      <Link to={`/edit/${contact.id}`}>Edit Contact</Link>
      <div className="map-container">
        <ContactMap latitude={contact.latitude} longitude={contact.longitude} />
      </div>
    </div>
  );
}

export default ContactDetails;
