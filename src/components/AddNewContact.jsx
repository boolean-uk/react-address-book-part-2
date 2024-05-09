import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddNewContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = { firstName, lastName, city, street, email };

    try {
      const response = await fetch(
        "https://boolean-api-server.fly.dev/samisalehsaeed/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        }
      );

      if (!response.ok) {
        console.log("Failed to add contact");
      }

      console.log("Contact added successfully");

      setFirstName("");
      setLastName("");
      setCity("");
      setStreet("");
      setEmail("");
    } catch (error) {
      console.error("Error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "city":
        setCity(value);
        break;
      case "street":
        setStreet(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <h1>Add a new contact</h1>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        City
        <input type="text" name="city" value={city} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Street
        <input
          type="text"
          name="street"
          value={street}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Email
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>
      <br />
      <br />
      <button type="submit">ADD CONTACT</button>
      <br />
      <br />
      <Link to="/ContactsList">Back to Contacts</Link>
    </form>
  );
}
