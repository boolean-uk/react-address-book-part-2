/* eslint-disable no-unused-vars */

import { useNavigate, useParams } from 'react-router-dom'
import { useState, useContext } from 'react'
import { ContactContext } from '../App';

export default function EditContactForm() {
    const {contacts, setContacts} = useContext(ContactContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact({...contact, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // update database
        fetch(`https://boolean-uk-api-server.fly.dev/siljegja/contact/${id}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact),
        })

        setContact('');
        navigate('/contacts');

    }

    return (
        <section className='create-form'>
            <h3>Edit Contact</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={contact.firstName}
                    onChange={handleChange} />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={contact.lastName}
                    onChange={handleChange} />
                <label htmlFor="street">Street:</label>
                <input
                    type="text"
                    id="street"
                    name="street"
                    value={contact.street}
                    onChange={handleChange} />
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={contact.city}
                    onChange={handleChange} />

                <button>Save</button>

            </form>
        </section>
    )
}