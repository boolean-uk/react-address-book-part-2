import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [maxId, setMaxId] = useState(0); // State to store the largest ID
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing contacts and determine the largest ID
    axios.get("http://localhost:3002/contacts")
      .then((res) => {
        const ids = res.data.map((contact) => contact.id);
        const largestId = Math.max(...ids);
        setMaxId(largestId);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: (maxId + 1).toString(),
      firstName,
      lastName,
      street,
      city,
    };
    // Use axios to send a POST request to create a new contact
    axios.post("http://localhost:3002/contacts", newContact)
      .then((res) => {
        console.log("Contact created successfully!", res.data);
        navigate(`/contact-detail/${res.data.id}`); // Navigate to the view page of the newly created contact
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="street" className="form-label">
            Street:
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Contact
        </button>
      </form>
    </div>
  );
}

export default Create;
