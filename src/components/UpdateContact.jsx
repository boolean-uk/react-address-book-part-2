import React, {useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateContact = () => {
    const location = useLocation()
    const contact = location.state.contact
    
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
      firstName: contact.firstName,
      lastName: contact.lastName,
      street: contact.street,
      city: contact.city
    })
  
    async function  handleSubmit(event) {
      event.preventDefault()
      const response = await fetch(location.state.url
      , {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
      }
      })
      .then(navigate(`/contact/${contact.id}`))
    }
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setFormData(values => ({ ...values, [name]: value }))
    }
    return (
<section>
      <h2>Update contact</h2>
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
        <input className="form__submit" type="submit" value="Update" />

      </form>

    </section>
    );
}

export default UpdateContact;
