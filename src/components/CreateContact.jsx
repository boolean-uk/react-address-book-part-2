import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContact({ setContacts }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted!"); // Add this line to log the submission
    // Prepare contact data
    const newContact = {
      firstName,
      lastName,
      street,
      city,
    };

    // Send the new contact data to the API for saving
    fetch("https://boolean-api-server.fly.dev/pialoana/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => response.json())
      .then((data) => {
        // After successful creation, update the contacts state with the new contact
        setContacts((prevContacts) => [...prevContacts, data]);

        // Clear the form after submission
        setFirstName("");
        setLastName("");
        setStreet("");
        setCity("");

        // Navigate back to the contact list
        navigate("/contact");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create A Contact</h2>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Contact</button>
    </form>
  );
}

export default CreateContact;
