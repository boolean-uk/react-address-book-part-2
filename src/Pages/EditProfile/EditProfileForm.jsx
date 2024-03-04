import React, { useState, useEffect } from 'react'
import '../CreateContact/CreateContactForm.css'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOneContact, updateContact } from '../../Toolbox/api';

function EditProfileForm({updateContacts}) {
    const { id } = useParams();
    const navigate = useNavigate()
    const [contact, setContact] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
    });
    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await fetchOneContact(id);
            setContact(data);
            setFormData(data);
          } catch (error) {
            console.error('Error fetching contact data:', error);
          }
        };
      
        fetchData();
      }, [id]);

    const handleSubmit = ()=>{
        updateContact(formData,id)
        .then(updateContacts)
        .then(navigate(`/view/${id}`))
    }

    return (
        <div className="create-contact-form">
          <h2>Update Contact</h2>
          <form onSubmit={handleSubmit}>
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </label>
            <br />
    
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </label>
            <br />
    
            <label>
              Street:
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
              />
            </label>
            <br />
    
            <label>
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </label>
            <br />
    
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default EditProfileForm