import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const CreateContact = ({ addContact }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', street: '', city: '' });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://boolean-uk-api-server.fly.dev/sebgro98/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newContact => {
      addContact(newContact);
      navigate('/');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <label>
        Street:
        <input type="text" name="street" value={formData.street} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>
      <button type="submit">Create Contact</button>
    </form>
  );
};

export default CreateContact;
