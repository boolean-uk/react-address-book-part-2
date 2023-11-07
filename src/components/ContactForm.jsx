import { useState } from "react";
import { useNavigate } from "react-router-dom";

const newContact = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
};

function ContactForm() {
  const [newUser, setNewUser] = useState(newContact);

  const navigation = useNavigate();

  const submitFunction = (event) => {
    event.preventDefault();
    console.log("Submit button clicked");
    navigation("/");

    fetch("https://boolean-api-server.fly.dev/Callumhayden99/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        (data);
      })
  };

  return (
    <>
      <form className="form" onSubmit={submitFunction}>
        <h2 className="create-contact">Create Contact</h2>

        <div className="form-tabs">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            onChange={(e) =>
              setNewUser({ ...newUser, lastName: e.target.value })
            }
          />

          <label htmlFor="street">Street:</label>
          <input
            id="street"
            name="street"
            type="text"
            required
            onChange={(e) => setNewUser({ ...newUser, street: e.target.value })}
          />

          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            type="text"
            required
            onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
          />
        </div>

        <div className="actions-section">
          <button className="button-blue" type="submit">
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
