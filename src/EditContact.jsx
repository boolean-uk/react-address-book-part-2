import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditContact({ contactsList, setContactsList }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(location.state.firstName);
  const [lastName, setLastName] = useState(location.state.lastName);
  const [street, setStreet] = useState(location.state.street);
  const [city, setCity] = useState(location.state.city);
  const [validation, setValidation] = useState("");

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

    fetch(
      `https://boolean-api-server.fly.dev/Hamada-AB/contact/${+location.state
        .id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          street,
          city,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContactsList([...contactsList, data]);
      });
    navigate(`/contacts/${+location.state.id}`);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          placeholder="Street"
          onChange={(e) => setStreet(e.target.value)}
        />

        <label htmlFor="city">City</label>

        <input
          type="text"
          id="city"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="submit" value="SAVE" />
        <div className="validation-message">{validation}</div>
      </form>
    </>
  );
}
