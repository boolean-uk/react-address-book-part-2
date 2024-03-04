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
        <div className='Details' style={{background: contact.favouriteColour}}>
            <img 
                src={contact.profileImage}
                alt={"Missing"}
            />
            <h3>{contact.firstName} {contact.lastName} ({contact.gender})</h3>
            Location: {contact.street}, {contact.city} &nbsp;
            ({contact.latitude}, {contact.longitude}) <br/>
            email: {contact.email} <br/>
            Job title: {contact.jobTitle} <br/>

            &nbsp; <Link to={`/edit/${contact.id}`}>Update</Link>  &nbsp;
            &nbsp; <button onClick={() => deleteContact()}>Delete</button>
        </div>
    )
}
