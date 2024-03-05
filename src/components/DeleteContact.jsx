import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const DeleteContact = ({ contact, onDelete }) => {
  const navigate = useNavigate();
  

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://boolean-api-server.fly.dev/hassanhussa1n/contact/${contact.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDelete(contact.id); 
        console.log('Contact deleted successfully');
      } else {
        console.error('Error deleting contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting contact:', error.message);
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default DeleteContact;
