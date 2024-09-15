
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export default function UpdateContact({ApiURL}) {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''})
    const navigate = useNavigate()

    

    useEffect(() => {
        fetch(`${ApiURL}/${id}`)
        .then(res => res.json())
        .then(data => {
            setFormData(data)
        })
        .catch(error => {
            console.error('Error fetching contact:', error);
        });
    }, [id, ApiURL]);




    function handleSubmit(event) {
        event.preventDefault();
        fetch(`${ApiURL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update contact');
            }
            // If response is successful, parse the JSON response
            return response.json();
        })
        .then(data => {
            // Handle any further processing if needed
            console.log('Contact updated successfully:', data);
            // If response is successful, navigate to the contacts page
            navigate(`/contacts/${id}`);
        })
        .catch(error => {
            console.error('Error updating contact:', error);
        });
    }



    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevState => ({
            ...prevState, [name]: value
        }))
    }



    return(
    <>
    <h2>Update Contact</h2>
    <form className='update-form' onSubmit={handleSubmit}>
        
    <h3>First Name</h3>
    <input
        type='text'
        name='firstName'
        value={formData.firstName}
        onChange={handleChange}
     />
      <h3>Last Name</h3>
    <input
        type='text'
        name='lastName'
        value={formData.lastName}
        onChange={handleChange}
     />
      <h3>Street</h3>
    <input
        type='text'
        name='street'
        value={formData.street}
        onChange={handleChange}
     />
      <h3>City</h3>
    <input
        type='text'
        name='city'
        value={formData.city}
        onChange={handleChange}
     />
     <div>
        <button type='submit'>Submit update</button>
     </div>
     </form>
    </>
    )
}