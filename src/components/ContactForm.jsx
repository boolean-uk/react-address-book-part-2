import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ContactForm({contacts, setContacts, updateContact, setUpdateContact}) {
    const [formContact, setFormContact] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    })
    const navigate = useNavigate()

    const handleChange= (event) => {
        const { name, value } = event.target
        setFormContact({...formContact, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setContacts(prevContacts => [...prevContacts, formContact])

        fetch(`https://boolean-api-server.fly.dev/SebastianEngan/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formContact)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json()
        })
        .then(data => {
            console.log("Contact saved successfully:", data);
            setFormContact({
                firstName: '',
                lastName: '',
                street: '',
                city: ''
            })
        })
        navigate("/contacts")
    }
    
  return (
    <>
    <form className='contact-form' onSubmit={handleSubmit}>
        <h2>
            Add new Contact
        </h2>
        <label>
            First Name
            <input type="text" name="firstName" value={formContact.firstName} onChange={handleChange}/>
        </label>
        <label>
            Last Name
            <input type="text" name="lastName" value={formContact.lastName} onChange={handleChange}/>
        </label>
        <label>
            Street address
            <input type="text" name="street" value={formContact.street} onChange={handleChange}/>
        </label>
        <label>
            City
            <input type="text" name="city" value={formContact.city} onChange={handleChange}/>
        </label>
        <input className="form_Submit" type="submit" value="Save contact"/>
    </form>
    </>
  )
}

export default ContactForm