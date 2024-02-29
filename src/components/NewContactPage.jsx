import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewContactPage({ contacts, setContacts }) {
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const navigate = useNavigate();
  const handleFormUpdate = (event) => {
    const { id, value } = event.target;
    if (id === "firstName") setNewContact({ ...newContact, firstName: value });
    else if (id === "lastName")
      setNewContact({ ...newContact, lastName: value });
    else if (id === "city") setNewContact({ ...newContact, city: value });
    else if (id === "street") setNewContact({ ...newContact, street: value });
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(newContact);
    setContacts([...contacts, newContact]);
    navigate("/contacts");
  }

  return (
    <>
      <section className="contact-list-box">
        <h2>New Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name: </label>
          <input
            type="text"
            id="firstName"
            value={newContact.firstName}
            onChange={(e) => handleFormUpdate(e)}
            placeholder="firstName"
          />
          <br />
          <label htmlFor="lastName">Last name: </label>
          <input
            type="text"
            id="lastName"
            value={newContact.lastName}
            onChange={(e) => handleFormUpdate(e)}
            placeholder="lastName"
          />
          <br />
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            value={newContact.city}
            onChange={(e) => handleFormUpdate(e)}
            placeholder="city"
          />
          <br />
          <label htmlFor="street">Street: </label>
          <input
            type="text"
            id="street"
            value={newContact.street}
            onChange={(e) => handleFormUpdate(e)}
            placeholder="street"
          />
          <button type="submit">Add Contact</button>
        </form>
      </section>
    </>
  );
}

export default NewContactPage;
