import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddNewContact({ allContacts, setAllContacts }) {
  const navigate = useNavigate();
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    id: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    newContact.id = allContacts.length + 1;
    console.log("new contact", newContact);
    console.log("form submitted");

    fetch("https://boolean-uk-api-server.fly.dev/zainabch123/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((res) => res.json())
      .then((data) => setAllContacts([...allContacts, data]));
  }

  function handleInput(event) {
    const { name, value } = event.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  }

  return (
    <section>
      <h2>Create New Contact</h2>
      <form className="new-contact-form" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          name="firstName"
          onChange={handleInput}
          value={newContact.firstName}
        ></input>
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          name="lastName"
          onChange={handleInput}
          value={newContact.lastName}
        ></input>
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          name="street"
          onChange={handleInput}
          value={newContact.street}
        ></input>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={handleInput}
          value={newContact.city}
        ></input>
        <button
          type="submit"
          onClick={function () {
            handleSubmit(event), navigate("/contacts-list");
          }}
        >
          Save
        </button>
      </form>
    </section>
  );
}
