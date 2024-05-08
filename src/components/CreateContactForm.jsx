import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateContactForm({ contacts, setContacts }) {
    const navigation = useNavigate()
    const [addContact, setAddContact] = useState({
        firstName: '',
        lastName: '',
        street: '',
        city: '',
        email: '',
        jobTitle: '',
        profileImage: ''
    })

    function handleChange(e) {
        const {name, value} = e.target
        setAddContact({
            ...addContact,
            [name] : value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        async function addContactToList() {
            const options ={
                method: 'POST',
                body: JSON.stringify(addContact),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch('https://boolean-uk-api-server.fly.dev/MyrtheDullaart/contact', options)
            const data = await response.json()

            setContacts([
                ...contacts,
                data
            ])
        }

        addContactToList()
        setAddContact({
            firstName: '',
            lastName: '',
            street: '',
            city: ''
        })

        navigation('/contacts')
    }

    return (
        <form className="create-contact-form" onSubmit={handleSubmit}>
            <h2>Create Contact</h2>
            <label htmlFor="first-name">First Name: </label>
            <input type="text" name="firstName" id="first-name" value={addContact.firstName} onChange={handleChange} />

            <label htmlFor="last-name">Last Name: </label>
            <input type="text" name="lastName" id="last-name" value={addContact.lastName} onChange={handleChange} />

            <label htmlFor="street">Street: </label>
            <input type="text" name="street" id="street" value={addContact.street} onChange={handleChange} />

            <label htmlFor="city">City :</label>
            <input type="text" name="city" id="city" value={addContact.city} onChange={handleChange} />

            <label htmlFor="email">Email :</label>
            <input type="email" name="email" id="email" value={addContact.email} onChange={handleChange} />

            <label htmlFor="job-title">Job title :</label>
            <input type="text" name="jobTitle" id="job-title" value={addContact.jobTitle} onChange={handleChange} />

            <label htmlFor="profile-image">Picture :</label>
            <input type="text" name="profileImage" id="profile-image" value={addContact.profileImage} onChange={handleChange} />

            <button className="create-button">Create</button>
        </form>
    )
}