import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditContact() {

  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: ''
  });

  const navigate = useNavigate();

  useEffect(() => {

    fetch(`https://boolean-uk-api-server.fly.dev/alinjo/contact/${id}`)
      .then(response => response.json())
      .then(data => setFormData(data))
      .catch(error => console.error('Error fetching contact details:', error));

  }, [id]);

  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {

    e.preventDefault();
    fetch(`https://boolean-uk-api-server.fly.dev/alinjo/contact/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(formData),

    })
      .then(response => response.json())
      .then(() => {
        navigate(`/contact/${id}`);
      })
      .catch(error => console.error('Error updating contact:', error));

  };

  return (

    <div>
      <h1>Edit Contact</h1>
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

        <button type="submit">Update Contact</button>
      </form>
    </div>

  );
}

export default EditContact;
