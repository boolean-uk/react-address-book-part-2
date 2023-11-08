import { useState } from "react";

function CreateContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  return (
    <section className="form-section">
      <h2>Create New Contact</h2>
      <form className="form">
        <label htmlFor="first-Name">
          First Name :
          <input
            type="text"
            id="first-name"
            name="first-Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            placeholder="Enter Your Name"
            required
          />
        </label>
        <label htmlFor="last-Name">
          Last Name :
          <input
            type="text"
            id="last-Name"
            name="last-Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            placeholder="Enter Your Last Name"
            required
          />
        </label>
        <label htmlFor="city">
          City :
          <input
            type="text"
            id="city"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="Enter Your City"
            required
          />
        </label>
        <label htmlFor="street">
          Street :
          <input
            type="text"
            id="street"
            name="street"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
            placeholder="Enter Your Street"
            required
          />
        </label>
        <br />
        <button type="submit">Add new Contact</button>
      </form>
    </section>
  );
}

export default CreateContact;
