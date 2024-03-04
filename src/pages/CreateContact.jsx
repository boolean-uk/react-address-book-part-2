import { useState } from 'react';
import '../styles/CreateContact.css';
import { useNavigate } from 'react-router-dom';
export default function CreateContact() {
    const [form, setForm] = useState({
        email: '',
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        gender: '',
        jobTitle: '',
        favouriteColour: '',
        profileImage: '',
        latitude: 0,
        longitude: 0
    })

    const navigate = useNavigate();

    const handleFormChange = (e) => {
        if (e.target.name === 'latitude' || e.target.name === 'longitude') {
            return setForm({ ...form, [e.target.name]: parseFloat(e.target.value) })
        }
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        e.target.reset();
        if (!form.email || !form.firstName || !form.lastName || !form.street || !form.city) {
            return alert('Please fill out required fields: Email, Firstname, Lastname, Street, City.')
        }
        form.profileImage = `https://www.gravatar.com/avatar/${form.email}?d=identicon`
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
            <i className='requiredText'>Fields marked * are required.</i>
            <form className='cForm' onSubmit={handleFormSubmit}>
                <label className='required' htmlFor="email">Email</label>
                <input required="true" type="email" name="email" id="email" value={form.email} onChange={handleFormChange} />
                <label className='required' htmlFor="firstName">Firstname</label>
                <input required="true" type="text" name="firstName" id="firstName" value={form.firstName} onChange={handleFormChange} />
                <label className='required' htmlFor="lastName">Lastname</label>
                <input required="true" type="text" name="lastName" id="lastName" value={form.lastName} onChange={handleFormChange} />
                <label className='required' htmlFor="street">Street</label>
                <input required="true" type="text" name="street" id="street" value={form.street} onChange={handleFormChange} />
                <label className='required' htmlFor="city">City</label>
                <input required="true" type="text" name="city" id="city" value={form.city} onChange={handleFormChange} />
                <label htmlFor='gender'>Gender</label>
                <input type="text" name='gender' id='gender' value={form.gender} onChange={handleFormChange} />
                <label htmlFor='jobTitle'>Job Title</label>
                <input type='text' name='jobTitle' id='jobTitle' value={form.jobTitle} onChange={handleFormChange} />
                <label htmlFor='favouriteColour'>Favourite Colour</label>
                <input type='color' name='favouriteColour' id='favouriteColour' value={form.favouriteColour} onChange={handleFormChange} />
                <label htmlFor='latitude'>Latitude</label>
                <input type='number' name='latitude' id='latitude' value={form.latitude} onChange={handleFormChange} />
                <label htmlFor='longitude'>Longitude</label>
                <input type='number' name='longitude' id='longitude' value={form.longitude} onChange={handleFormChange} />
                <button type="submit" className="createButton">Create</button>
            </form>
        </div>
    )
}