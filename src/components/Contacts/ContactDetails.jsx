import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import "./styles/ContactDetails.css"

export function ContactDetails({setContacts, contacts, url}) {
    const { id } = useParams();
    const [contact, setContact] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        setContact(contacts.find(c => c.id == id))
    }, [])

    const deleteContact = async () => {
        await fetch(url + `/${contact.id}`, {
            method: "DELETE"
        })

        setContacts(contacts.filter(c => c.id != contact.id))

        navigate("/")
    }

    if ( contact == null ) return <p>Loading...</p>
    return (
        <div className='Details'>
            <h3>{contact.firstName} {contact.lastName}</h3>
            {contact.street}, {contact.city}
            <br/>
            <Link to={`/edit/${contact.id}`}>Update</Link>  &nbsp;
            <button onClick={() => deleteContact()}>Delete</button>
        </div>
    )
}
