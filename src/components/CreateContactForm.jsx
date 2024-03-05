import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateContactForm() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });

  const navigate = useNavigate();

  const fetchData = () => {
    fetch("https://boolean-api-server.fly.dev/hannpham1007/contact")
      .then((response) => response.json())
      .then((data) => {
        const idOverFifteen = []
        data.forEach(element => {
            if(element.id > 15){
                idOverFifteen.push(element)
            }
        });
        console.log(data)
        setContacts(idOverFifteen)
      })
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addNewContact = () => {
    fetch("https://boolean-api-server.fly.dev/hannpham1007/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch((error) => console.error("Error adding new answer", error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addNewContact();
    fetchData();

    setFormData({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
    });
    navigate('/contacts');

  };
  return (
    <>
    <h2>Create Contact</h2>
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          name="firstName"
          type="text"
          id="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          name="lastName"
          type="text"
          id="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
      </label>
      <br />

      <label>
        Street:
        <input
          name="street"
          type="text"
          id="street"
          onChange={handleChange}
          value={formData.street}
        />
      </label>
      <br />

      <label>
        City:
        <input
          name="city"
          type="text"
          id="city"
          onChange={handleChange}
          value={formData.city}
        />
      </label>
      <br />

      <button type="submit">Create</button>
    </form>
    </>

  );
}

export default CreateContactForm;
