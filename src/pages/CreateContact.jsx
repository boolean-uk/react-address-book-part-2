import { useState } from 'react';
import '../styles/CreateContact.css';
import { useNavigate } from 'react-router-dom';
export default function CreateContact() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: ''
    })

    const navigate = useNavigate();

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        e.target.reset();
        if (form.firstName === '' || form.lastName === '' || form.street === '' || form.city === '') {
            return alert('Please fill out all fields.')
        }
        fetch('https://boolean-api-server.fly.dev/spectraldesign/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(() => navigate('/'))
    }

    return (
        <div className="createContactContainer">
            <h1 className="title">Create Contact</h1>
            <form className='cForm' onSubmit={handleFormSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" value={form.firstName} onChange={handleFormChange} />
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" id="lastName" value={form.lastName} onChange={handleFormChange} />
                <label htmlFor="street">Street:</label>
                <input type="text" name="street" id="street" value={form.street} onChange={handleFormChange} />
                <label htmlFor="city">City:</label>
                <input type="text" name="city" id="city" value={form.city} onChange={handleFormChange} />
                <button type="submit" className="createButton">Create</button>
            </form>
        </div>
    )
}