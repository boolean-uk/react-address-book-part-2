import React, {  useContext, useState } from 'react'
import { ContactsContext } from '../../App'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CreateContact() {
    const { url, setData} = useContext(ContactsContext)
    const [newContact, setNewContact] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
      });

    const navigate = useNavigate();
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch(`${url}axel-ahlander/contact`,
            { method:'POST',
              headers: {'Content-Type': 'application/json',
              },
              body: JSON.stringify(newContact),
            }  
            );
            if (response.ok) {
                const addedContact = await response.json();

                setData((prevData) => [...prevData, addedContact]);
                navigate("/");
            }
      };
      return (
        <>
          <div className="form-container">
            <h1>Create Contact</h1>
            <Link to="/" className="return-link">
              <p id="return">Return to menu</p>
            </Link>
    
            <form onSubmit={handleSubmit} className="form-info">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={newContact.firstName}
                onChange={handleInputChange}
                required
              />
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={newContact.lastName}
                onChange={handleInputChange}
                required
              />
              <label>Street:</label>
              <input
                type="text"
                name="street"
                value={newContact.street}
                onChange={handleInputChange}
                required
              />
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={newContact.city}
                onChange={handleInputChange}
                required
              />
              <button type="submit">Create Contact</button>
            </form>
          </div>
        </>
      );
    }
      
    
      

export default CreateContact