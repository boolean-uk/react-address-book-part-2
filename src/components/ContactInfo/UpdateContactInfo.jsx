import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ContactsContext } from '../../App';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function UpdateContactInfo() {
    const {url, setData} = useContext(ContactsContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const [updatedContact, setUpdatedContact] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
      });

    useEffect(() => {
        const fetchCurrentContact = async () => {
          const response = await fetch(`${url}axel-ahlander/contact/${id}`);
          if (response.ok) {
            const contactData = await response.json();
            setUpdatedContact(contactData);
        }
    }
        fetchCurrentContact();
    }, [id, url]);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedContact((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
       

        const response = await fetch(`${url}axel-ahlander/contact/${id}`,
            { method:'PUT',
              headers: {'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedContact),
            }  
            );
            if (response.ok) {
                const addedContact = await response.json();

                setData((prevData) => prevData.map((contact) => contact.id === addedContact.id ? addedContact : contact));
                navigate(`/contact/${id}`);
            }
      };
  return (
    <>
              <div className="form-container">
                <h1>Update Contact</h1>
                <Link to={`/contact/${id}`} className="return-link">
                  <p id="return">Return to contact</p>
                </Link>
        
                <form onSubmit={handleSubmit} className="form-info">
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={updatedContact.firstName}
                    onChange={handleInputChange}
                  />
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={updatedContact.lastName}
                    onChange={handleInputChange}
                  />
                  <label>Street:</label>
                  <input
                    type="text"
                    name="street"
                    value={updatedContact.street}
                    onChange={handleInputChange}
                  />
                  <label>City:</label>
                  <input
                    type="text"
                    name="city"
                    value={updatedContact.city}
                    onChange={handleInputChange}
                  />
                  <button className = "update-button" type="submit">Update Contact</button>
                </form>
              </div>
            </>
  )
}

export default UpdateContactInfo