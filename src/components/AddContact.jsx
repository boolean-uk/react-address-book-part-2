import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const newContact = { firstName, lastName, street, city };

    fetch('https://boolean-uk-api-server.fly.dev/uthmel/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/'); 
      })
      .catch(error => console.error('Error adding contact:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
      </label>
      <label>
        Street:
        <input
          type="text"
          value={street}
          onChange={(event) => setStreet(event.target.value)}
          required
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          required
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddContact;


