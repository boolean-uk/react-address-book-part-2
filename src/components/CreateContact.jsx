import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateContact({url}) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: ""
})

const navigate = useNavigate()
function handleSubmit(event) {
        event.preventDefault()
        fetch(url, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add contact')
            }
            return response.json()
        })
        .then(navigate('/contacts'))


}

function handleChange(event) {
    const {name, value} = event.target;
    setFormData(prevState => ({
        ...prevState, [name]: value
    }))
}


    return (
        <>
          <h2>Create contact</h2>  
          <form className='submit-form' onSubmit={handleSubmit}>
            <h3>First Name</h3>
            <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange} />
            <h3>Last Name</h3>
            <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange} />
            <h3>Street Name</h3>
            <input
            type='text'
            name='street'
            value={formData.street}
            onChange={handleChange} />
            <h3>City</h3>
            <input
            type='text'
            name='city'
            value={formData.city}
            onChange={handleChange} />
            <div>
            <button type='submit'>Submit</button>
            </div>
          </form>
        </>
    );
}
