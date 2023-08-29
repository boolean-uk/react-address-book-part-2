import "../App.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact({addContact}) {

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const name = `${firstName} ${lastName}`
        
        const newContact = {
            id: Math.floor(Math.random() * 100) ,
            name,
            username,
            email,
            phone,
            address: {
                street,
                city,
                geo : {
                    lat,
                    lng
                }
            },
            website,
            company: {
                name
            },
            geo: {
                
            }
        }
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(newContact),
            headers: {
              'Content-Type': 'application/json'
            }
          });

        await response.json();

        addContact(newContact)        
        navigate('/');
        
    }

    return (
        <div className="dashboard">
            <h1>Create Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" id="firstName" name="firstName" className="form-input" onChange={(e) => setFirstName(e.target.value)}></input>

                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" id="lastName" name="lastName" className="form-input" onChange={(e) => setLastName(e.target.value)}></input>
                
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" id="username" name="username" className="form-input" onChange={(e) => setUsername(e.target.value)}></input>
                                
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-input" onChange={(e) => setEmail(e.target.value)}></input>

                <label htmlFor="phone" className="form-label">PhoneNumber</label>
                <input type="text" id="phone" name="phone" className="form-input" onChange={(e) => setPhone(e.target.value)}></input>

                <label htmlFor="street" className="form-label">Street</label>
                <input type="text" id="street" name="street" className="form-input" onChange={(e) => setStreet(e.target.value)}></input>

                <label htmlFor="city" className="form-label">City</label>
                <input type="text" id="city" name="city" className="form-input" onChange={(e) => setCity(e.target.value)}></input>

                <label htmlFor="website" className="form-label">Website</label>
                <input type="text" id="website" name="website" className="form-input" onChange={(e) => setWebsite(e.target.value)}></input>

                <label htmlFor="company" className="form-label">Company</label>
                <input type="text" id="company" name="company" className="form-input" onChange={(e) => setCompany(e.target.value)}></input>

                <label htmlFor="lat" className="form-label">Latitude</label>
                <input type="text" id="lat" name="lat" className="form-input" onChange={(e) => setLat(e.target.value)}></input>

                <label htmlFor="lng" className="form-label">Longtitude</label>
                <input type="text" id="lng" name="lng" className="form-input" onChange={(e) => setLng(e.target.value)}></input>

                <button type="submit" className="create-button">Create</button>
            </form>
        </div>
    )
}

export default AddContact