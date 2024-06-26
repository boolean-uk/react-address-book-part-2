import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateContact({ contactsList, setContactsList }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [validation, setValidation] = useState("");

  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!firstName) {
      setValidation("First Name is required.");
      return;
    }
    if (!lastName) {
      setValidation("Last Name is required.");
      return;
    }

    if (!street) {
      setValidation("Street is required.");
      return;
    }
    if (!city) {
      setValidation("City is required.");
      return;
    }
    fetch("https://boolean-api-server.fly.dev/Hamada-AB/contact", {
      method: "POST", // or PUT or DELETE
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        street,
        city,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContactsList([...contactsList, data]);
      });
    navigate("/");
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="text"
          id="street"
          value={street}
          placeholder="Street"
          onChange={(e) => setStreet(e.target.value)}
        />

        <input
          type="text"
          id="city"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="submit" value="ADD" />
        <div className="validation-message">{validation}</div>
      </form>
    </>
  );
}
