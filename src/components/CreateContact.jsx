import {useState } from "react";
import { useNavigate } from "react-router-dom";

const initState = {
  firstName: "",
  lastName: "",
  street: "",
  city: ""
};

export default function CreateContact(props) {
  const [newContact, setNewContact] = useState(initState);
  const navigate = useNavigate();
  const { contacts, setContacts } = props;

  function handleChange(event) {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://boolean-api-server.fly.dev/pkekkonen/contact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        setContacts([...contacts, responseData]);  
    });

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName"> First name: </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={(event) => handleChange(event)}
        value={newContact.firstName}
      />
      <label htmlFor="lastName"> Last name: </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={(event) => handleChange(event)}
        value={newContact.lastName}
      />
      <label htmlFor="street"> Street: </label>
      <input
        type="text"
        id="street"
        name="street"
        onChange={(event) => handleChange(event)}
        value={newContact.street}
      />
      <label htmlFor="city"> City: </label>
      <input
        type="text"
        id="city"
        name="city"
        onChange={(event) => handleChange(event)}
        value={newContact.city}
      />
      <button type="submit">Create</button>
    </form>
  );
}
