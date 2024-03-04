import { useState } from "react";
import "../styles/CreateContact.css";
import { useNavigate } from "react-router-dom";

export default function CreateContact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const navigate = useNavigate();

  const handleFormChange = (i) => {
    setForm({ ...form, [i.target.name]: i.target.value });
  };

  const handleFormSubmit = (i) => {
    i.preventDefault();
    i.target.reset();
    if (
      form.firstName === "" ||
      form.lastName === "" ||
      form.street === "" ||
      form.city === ""
    ) {
      return alert("Everything must be filled in");
    }
    fetch("https://boolean-api-server.fly.dev/api-docs/alexanderell/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => navigate("/"));
  };

  return (
    <div className="createContactContainer">
      <h1 className="title">Create Contact</h1>
      <form className="cForm" onSubmit={handleFormSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={form.firstName}
          onChange={handleFormChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={form.lastName}
          onChange={handleFormChange}
        />
        <label htmlFor="lastName">Street:</label>
        <input
          type="text"
          name="street"
          id="street"
          value={form.street}
          onChange={handleFormChange}
        />
        <label htmlFor="City">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={form.city}
          onChange={handleFormChange}
        />
        <button type="submit" className="createButton">
          Create
        </button>
      </form>
    </div>
  );
}
