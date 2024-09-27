import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ViewContact() {
  const [contact, setContact] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://boolean-api-server.fly.dev/giarreh/contact/${id}`)
    .then(response => response.json())
    .then(data => setContact(data));
  }, []);


  const handleDelete = () => {
    fetch(`https://boolean-api-server.fly.dev/giarreh/contact/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }
      return response.json();
    })
    .then(data => {
      console.log("Contact deleted! Response body: ", data);
      // You may want to update your UI or perform other actions based on the response
    })
    .then(() => navigate("/"))
    .catch(error => {
      console.error('Error deleting contact:', error);
      // You may want to display an error message to the user
    });
  }

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  }
  
  const styles = {
    pageContainer: { /* Styles for the whole page container */
      background: 'lightblue',
      minHeight: '100vh', /* Ensure the background covers the entire viewport */
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: { /* Styles for the content container */
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    favoriteColor: {
      color: `${contact.favouriteColour}`
    },
    button: {
      backgroundColor: '#4285F4',
      padding: 10,
      margin: 10,
      textAlign: 'center',
      cursor: 'pointer',
      color: 'white',
      borderRadius: 5,
    },
    button_delete: {
      backgroundColor: '#d62516',
      padding: 10,
      margin: 10,
      textAlign: 'center',
      cursor: 'pointer',
      color: 'white',
      borderRadius: 5,
    },
    button_edit: {
      backgroundColor: '#0F9D58',
      padding: 10,
      margin: 10,
      textAlign: 'center',
      cursor: 'pointer',
      color: 'white',
      borderRadius: 5,
    },
    iframe: {
      width: '100%',
      height: '250px',
    }
    
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2>
          {contact.firstName} {contact.lastName}
        </h2>
        <img src={contact.profileImage} alt='profile-picture' />
        <p>Job title: {contact.jobTitle}</p>
        <p>Email: {contact.email}</p>
        <p>Address: {contact.street}, {contact.city}</p>
        <p>Gender: {contact.gender} </p>
        <div>
          <p>Latitude: {contact.latitude}, Longtitude: {contact.longitude} </p>
          <iframe width="100%" height="250" src={`https://maps.google.com/maps?q=${contact.latitude}, ${contact.longitude}&output=embed`}></iframe>
        </div>
        <p style={styles.favoriteColor}>This text has my favorite color!</p>
        <div onClick={() => navigate("/")} style={styles.button}>Dashboard</div>
        <div onClick={handleEdit} style={styles.button_edit}>Edit Contact</div>
        <div onClick={handleDelete} style={styles.button_delete}>Delete Contact</div>
      </div>
    </div>
  )
}
