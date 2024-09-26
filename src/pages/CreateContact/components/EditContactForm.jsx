import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function EditContactForm( props ) {
  //const {contacts, setContacts} = props
  const location = useLocation();
  const {contact} = location.state;
  const [editContact, setEditContact] = useState(contact)
  const navigate = useNavigate();

  const newContact = {
    firstName: "",
    lastName: "",
    street: "",
    city: ""
  }

  useEffect(() =>{
    setEditContact(contact || newContact)
  }, [])

  const handleUpdate = (e) => {
    const inputContact = {...editContact}
    inputContact[e.target.name] = e.target.value
    setEditContact(inputContact)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
        updateDb()

    navigate("/contact-list"); // Navigate to the contact list after updating
  };

  const updateDb = async () => {
    const reqOptions = {
      method: 'PUT',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(editContact)
    }

    await fetch(`https://boolean-api-server.fly.dev/santhia97/contact/${editContact.id}`, reqOptions)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name='firstName'
        value={editContact.firstName}
        onChange={handleUpdate}
        required
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={editContact.lastName}
        onChange={handleUpdate}
        required
      />

      <label htmlFor="street">Street:</label>
      <input
        type="text"
        id="street"
        name="street"
        value={editContact.street}
        onChange={handleUpdate}
        required
      />

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={editContact.city}
        onChange={handleUpdate}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditContactForm;
