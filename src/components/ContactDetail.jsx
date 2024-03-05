import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ContactDetail() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3002/contacts/${id}`)
      .then(response => setContact(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3002/contacts/${id}`);
      navigate('/contact-list'); // Navigate back to contact list after deletion
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      {contact ? (
        <div>
          <h2>Contact Detail</h2>
          <p>ID: {contact.id}</p>
          <p>First Name: {contact.firstName}</p>
          <p>Last Name: {contact.lastName}</p>
          <p>Street: {contact.street}</p>
          <p>City: {contact.city}</p>
          <div>
            <Link to={`/update/${id}`} className="btn btn-success">Update</Link>
            <button onClick={handleDelete} className="btn btn-danger mx-2">Delete</button>
            <Link to={`/contact-list`} className="btn btn-primary">Back To Contact List</Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ContactDetail;
