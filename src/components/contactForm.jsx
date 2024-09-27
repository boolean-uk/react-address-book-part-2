import { useState } from 'react'

export default function ContactForm({ contacts, setContacts }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");

    const newContact = {
        firstName: firstName,
        lastName: lastName,
        street: street,
        city: city,
        id: contacts.length + 1
    };

    const addContact = (e) => {
        e.preventDefault();
        fetch('https://boolean-api-server.fly.dev/radio58/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        .then((res) => res.json())
        .then((data) => {
            setContacts([...contacts, data]);
        });
    };
    
    return (
        <>
        <h2>Add Contact</h2>
            <form className="new-contact-form">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" required onChange={e => setFirstName(e.target.value)}></input>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" required onChange={e => setLastName(e.target.value)}></input>
                <label htmlFor="street">Street</label>
                <input type="text" name="street" required onChange={e => setStreet(e.target.value)}></input>
                <label htmlFor="city">City</label>
                <input type="text" name="city" required onChange={e => setCity(e.target.value)}></input>
                <button type="submit" onClick={e => addContact(e)}>Add Contact</button>
            </form>
        </>
    )
}