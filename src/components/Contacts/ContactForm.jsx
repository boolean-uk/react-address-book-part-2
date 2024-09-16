import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./styles/ContactForm.css"

export function ContactForm({setContacts, url, contacts}) {
    const { id } = useParams();
    
    const navigate = useNavigate()

    const [contact, setContact] = 
        useState({firstName: '', lastName: '', street: '',
        city: ''});

    useEffect(() => {
        if(id != null)
            setContact(contacts.find(c => c.id == id));
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(id == null){
            const data = await fetch(url, {
                method: "POST",
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact)
            }).then(res => res.json());
            setContacts(contacts => [...contacts, data])
        }else{
            const data = await fetch(url + `/${contact.id}`, {
                method: "PUT",
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact)
            }).then(res => res.json());
            console.log(data)
            setContacts(c => c.map(co => 
                co.id == contact.id ? contact : co
            ))
        }
        navigate("/")
    }


    const handleChange = (event) => {
        const {name, value} = event.target;

        setContact({...contact, [name]: value})
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='firstName'>First name:</label>
            <input name="firstName" value={contact.firstName} onChange={handleChange}/>
            <label htmlFor='lastName'>Last name:</label>
            <input name="lastName" value={contact.lastName} onChange={handleChange}/>
            <label htmlFor='city'>City:</label>
            <input name="city" value={contact.city} onChange={handleChange}/>
            <label htmlFor='street'>Street:</label>
            <input name="street" value={contact.street} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm
