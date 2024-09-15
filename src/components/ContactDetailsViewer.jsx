import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ContactDetailsViewer = () => {
  const [contact, setContact] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://boolean-api-server.fly.dev/OsamahAlmaliki/contact/${id}`)
        .then((response) => {
          setContact(response.data);
        })
        .catch((error) => {
          console.error("Error fetching contact details:", error);
        });
    }
  }, [id]);

  return (
    <div>
      <h2>Contact Details</h2>
      <button>
        <Link to="/">Back to Contact List</Link>
      </button>
      {contact && (
        <div>
          <p>First Name: {contact.firstName}</p>
          <p>Last Name: {contact.lastName}</p>
          <p>Street: {contact.street}</p>
          <p>City: {contact.city}</p>
          <div>
            <iframe
              width="100%"
              height="250"
              src={`https://maps.google.com/maps?q=${contact.latitude},${contact.longitude}&output=embed`}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetailsViewer;
