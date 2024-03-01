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
    //Load all data from this input
    const { id, value } = event.target;
    //Check what text has been updated and update the state accordingly
    if (id === "firstName") setNewContact({ ...newContact, firstName: value });
    else if (id === "lastName")
      setNewContact({ ...newContact, lastName: value });
    else if (id === "city") setNewContact({ ...newContact, city: value });
    else if (id === "street") setNewContact({ ...newContact, street: value });
  };
  const postRequestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContact),
  };
  function handleSubmit(event) {
    //Prevent default
    event.preventDefault();

    console.log("Added: ", newContact, " to contacts");
    // Make a POST request to API
    fetch(
      `https://boolean-api-server.fly.dev/VictorAdamson/contact`,
      postRequestOptions
    )
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((jsonData) => {
        //If request is Ok
        console.log(jsonData);
        setNewContact(jsonData);
        //Add the newly added contact to the original state
        setContacts([...contacts, newContact]);
      })
      .catch((err) => {
        //If request is bad
        console.log(err, "Error: contact could not be added!");
      });
    console.log(contacts);
    //Route back to root
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
