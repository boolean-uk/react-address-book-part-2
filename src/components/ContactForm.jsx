import { useState, useContext } from "react";
import { contactContext } from "../App";



export default function ContactForm() {
    const url = "https://boolean-uk-api-server.fly.dev/brandsegg/contact"
    const newContactForm = {
        city: '',
        email: '',
        favouriteColour: '',
        firstName: '',
        gender: '',
        id: 0,
        jobTitle: '',
        lastName: '',
        latitude: 0,
        longitude: 0,
        profileImage: '',
        street: '',
    }

    const [newContact, setNewContact] = useState(newContactForm)
    const { contacts, setContacts, setUpdated } = useContext(contactContext)


    const postContact = async () => {
        const request = {
            method: "POST",
            headers: { 'Content-Type': 'application/json', 'accept': 'application/json' },
            body: JSON.stringify(newContact),
        }
        setUpdated(newContact)
        fetch(url, request).then(response => response.json()).then(setContacts([...contacts, newContact]))

    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        //post contact to API
        postContact()
    }

    return (
        <div>
            <form>
                <label htmlFor="fname">First Name</label><br />
                <input
                    type="text"
                    id="fname"
                    name='fname'
                    onChange={e => setNewContact({ ...newContact, firstName: e.target.value })}
                    value={newContact.firstName}
                /><br />

                <label htmlFor="lname">Last Name</label><br />
                <input
                    type="text"
                    id="lname"
                    name='lname'
                    onChange={e => setNewContact({ ...newContact, lastName: e.target.value })}
                    value={newContact.lastName}
                /><br />

                <label htmlFor="street">Street</label><br />
                <input
                    type="text"
                    id="street"
                    name='street'
                    onChange={e => setNewContact({ ...newContact, street: e.target.value })}
                    value={newContact.street}
                /><br />

                <label htmlFor="city">City</label><br />
                <input
                    type="text"
                    id="city"
                    name='city'
                    onChange={e => setNewContact({ ...newContact, city: e.target.value })}
                    value={newContact.city}
                /><br />

                <button type="submit" onClick={handleSubmit}>Create</button>
            </form>
        </div>
    )
}