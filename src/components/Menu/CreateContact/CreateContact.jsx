import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateContact(props) {
  const { contact, root, getFunction } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const newContact = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    city: city,
    street: street,
    id: contact.length + 1,
  };
  const postContact = () => {
    const options = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(newContact),
    };

    fetch(root, options)
      .then((response) => response.json())
      .then(() => getFunction);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postContact();
    navigate("/Contact-List");
  };

  return (
    <section className="form-section">
      <h2>Create New Contact</h2>
      <form className="form" onSubmit={handleSubmit}>
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
        <label htmlFor="email">
          Email Address :
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Your Email Address "
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
