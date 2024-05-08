import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function UpdateContactForm({ contacts, setContacts, selectedContact }) {
    const navigation = useNavigate()
    const [contactToUpdate, setContactToUpdate] = useState(selectedContact)

    function handleChange(e) {
        const {name, value} = e.target
        setContactToUpdate({
            ...selectedContact,
            [name] : value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        async function addContactToList() {
            const options ={
                method: 'PUT',
                body: JSON.stringify(contactToUpdate),
                headers: {
                    'Content-type': 'application/json',
                },
            }

            const response = await fetch(`https://boolean-uk-api-server.fly.dev/MyrtheDullaart/contact/${contactToUpdate.id}`, options)
            const data = await response.json()

            if (contactToUpdate) {
                const updatedContact = contacts.map((contact) => {
                if (contact.id !== data.id) return contact
                return { ...contactToUpdate}
            })

            setContacts(updatedContact)
        }}

        addContactToList()

        navigation(`/contact/${selectedContact.id}`)
    }

    return (
        <form className="create-contact-form" onSubmit={handleSubmit}>
            <h2>Update Contact</h2>
            <label htmlFor="first-name">First Name: </label>
            <input type="text" name="firstName" id="first-name" value={contactToUpdate.firstName} onChange={handleChange} />

            <label htmlFor="last-name">Last Name: </label>
            <input type="text" name="lastName" id="last-name" value={contactToUpdate.lastName} onChange={handleChange} />

            <label htmlFor="street">Street: </label>
            <input type="text" name="street" id="street" value={contactToUpdate.street} onChange={handleChange} />

            <label htmlFor="city">City :</label>
            <input type="text" name="city" id="city" value={contactToUpdate.city} onChange={handleChange} />

            <label htmlFor="email">Email :</label>
            <input type="email" name="email" id="email" value={contactToUpdate.email} onChange={handleChange} />

            <label htmlFor="job-title">Job title :</label>
            <input type="text" name="jobTitle" id="job-title" value={contactToUpdate.jobTitle} onChange={handleChange} />

            <label htmlFor="profile-image">Picture :</label>
            <input type="text" name="profileImage" id="profile-image" value={contactToUpdate.profileImage} onChange={handleChange} />

            <label htmlFor="latitude">Latitude :</label>
            <input type="text" name="latitude" id="latitude" value={contactToUpdate.latitude} onChange={handleChange} />

            <label htmlFor="longitude">Longitude :</label>
            <input type="text" name="longitude" id="longitude" value={contactToUpdate.longitude} onChange={handleChange} />

            <button className="create-button">Update</button>
        </form>
    )
}