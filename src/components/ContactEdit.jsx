import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ContactEdit({ data, setData }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const contactToEdit = data.find(contact => contact.id.toString() === id);

  const [editContact, setEditContact] = useState(contactToEdit || {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
  });

  useEffect(() => {
    if (contactToEdit) {
      setEditContact(contactToEdit);
    }
  }, [contactToEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditContact(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://boolean-api-server.fly.dev/ateeb020301/contact/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editContact),
    })
    .then(response => response.json())
    .then(updatedContact => {
      setData(prevData => prevData.map(item => item.id === updatedContact.id ? updatedContact : item));
      navigate('/');
    })
    .catch(error => console.error('Error updating contact:', error));
  };

  return (
<form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={editContact.firstName}
        required
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={editContact.lastName}
        required
        />
        <br />
        <label htmlFor="city">City:</label>
        <input
        type="text"
        id="city"
        name="city"
        onChange={handleChange}
        value={editContact.city}
        required
        />
        <br />
        <label htmlFor="street">Street:</label>
        <input
          type="text"
          id="street"
          name="street"
          onChange={handleChange}
          value={editContact.street}
          required
        />
        <br />
        <label htmlFor="state">State:</label>
        <input
        type="text"
        id="state"
        name="state"
        onChange={handleChange}
        value={editContact.state}
        required
        />
       
        <br />
        <button type="submit">Submit Changes</button>
    </form>
  );
}
