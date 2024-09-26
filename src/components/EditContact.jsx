import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditContact({ contacts, onEdit }) { 
  const navigate = useNavigate();
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === parseInt(id));
  const [editedContact, setEditedContact] = useState({});

  useEffect(() => {
    if (contact) {
      setEditedContact({ ...contact });
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      if (!contact) {
        console.error('Contact is undefined.');
        return;
      }

      const response = await fetch(
        `https://boolean-api-server.fly.dev/hassanhussa1n/contact/${contact.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editedContact),
        }
      );

      if (response.ok) {
        onEdit(contact.id, editedContact);
        console.log('Contact updated successfully');
        navigate(`/contact/${contact.id}`);
      } else {
        console.error('Error updating contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating contact:', error.message);
    }
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={editedContact.firstName || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={editedContact.lastName || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={editedContact.city || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={editedContact.address || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleUpdate}>
          Update Contact
        </button>
      </form>
    </div>
  );
}

export default EditContact;
