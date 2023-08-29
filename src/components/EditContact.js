import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditContact({people, setPeople}) {
    const { id } = useParams()
    const navigate = useNavigate()
    const [contact,setContact] = useState(null)

    useEffect(() => {
        const existingContact = people.find((person) => person.id === parseInt(id))
        if (existingContact) setContact(existingContact)
    }, [id,people])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updatedPeople = people.map((person) => person.id === contact.id ? contact : person)
        setPeople(updatedPeople)
        
        navigate(`/contact/${id}`)
    }

    if (!contact) return <div>Loading...</div>;

    return (
        <div className="dashboard">
            <h1>Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-input" value={contact.name} onChange={(e) => setContact({...contact, name: e.target.value})}></input>
                
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" id="username" name="username" className="form-input" value={contact.username} onChange={(e) => setContact({...contact, username: e.target.value})}></input>
                                
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" className="form-input" value={contact.email} onChange={(e) => setContact({...contact, email: e.target.value})}></input>

                <label htmlFor="phone" className="form-label">PhoneNumber</label>
                <input type="text" id="phone" name="phone" className="form-input" value={contact.phone} onChange={(e) => setContact({...contact, phone: e.target.value})}></input>

                <label htmlFor="street" className="form-label">Street</label>
                <input type="text" id="street" name="street" className="form-input" value={contact.address.street} onChange={(e) => setContact({...contact, address: {...contact.address,street: e.target.value}})}></input>

                <label htmlFor="city" className="form-label">City</label>
                <input type="text" id="city" name="city" className="form-input" value={contact.address.city} onChange={(e) => setContact({...contact, address: {...contact.address, city: e.target.value}})}></input>

                <label htmlFor="website" className="form-label">Website</label>
                <input type="text" id="website" name="website" className="form-input" value={contact.website} onChange={(e) => setContact({...contact, website: e.target.value})}></input>

                <label htmlFor="company" className="form-label">Company</label>
                <input type="text" id="company" name="company" className="form-input" value={contact.company.name} onChange={(e) => setContact({...contact, company: {...contact.company, name: e.target.value}})}></input>

                <button type="submit" className="create-button">Edit</button>
            </form>
        </div>
    )
}

export default EditContact