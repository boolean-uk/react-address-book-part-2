import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContactDetails({ theContactData, theUrl, setFetchData }) {
  const navigator = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");

  const newContactList = {
    firstName: firstName,
    lastName: lastName,
    street: street,
    city: city,
    id: theContactData.length + 1,
  };

  function createNewContact() {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newContactList),
    };

    fetch(theUrl, options)
      .then((response) => response.json())
      .then(() => setFetchData(true));
  }

  function handleSubmit(event) {
    event.preventDefault();
    createNewContact();
    navigator("/");
  }
  return (
    <section>
      <h2>Create Contact</h2>
      <form className="new__contact__form" onSubmit={handleSubmit}>
        <label htmlFor="first-name">
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
          />
        </label>
        <label htmlFor="last-name">
          Last name:
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Enter Last Name"
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}
            required
          />
        </label>
        <label htmlFor="street">
          Street:
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Enter Street Name"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
            required
          />
        </label>
        <label htmlFor="city">
          City:
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            required
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </section>
  );
}

export default CreateContactDetails;
