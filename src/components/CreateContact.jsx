import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateContact = ({url}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: ""
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(url
    , {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(navigate('/contacts'))
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData(values => ({ ...values, [name]: value }))
  }
  return (
    <section>
      <h2>Create contact</h2>
      <form className="form" onSubmit={handleSubmit}>
        <h3>First Name</h3>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <h3>Last Name</h3>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <h3>Street</h3>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        <h3>City</h3>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <input className="form__submit" type="submit" value="Create" />

      </form>

    </section>
  );
}

export default CreateContact;
