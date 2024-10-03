import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateContact() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    fetch('https://boolean-uk-api-server.fly.dev/alinjo/contact', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      
    })

      .then(response => response.json())
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error('Error creating contact:', error));
  };

  return (

    <div>
      <h1>Create Contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />

        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          placeholder="Street"
          required
        />

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          required
        />

        <button type="submit">Create Contact</button>
      </form>
    </div>

  );
}

export default CreateContact;