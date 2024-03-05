import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import './style.css'

function ContactDetails(props) {
    const [contact, setContact] = useState(null)
    const { id } = useParams()
    const { contacts } = props
    const navigate = useNavigate()

    useEffect(() => {
        if (contacts && id) {
            const matchingContact = contacts.find((c) =>
            Number(c.id) === Number(id))
            setContact(matchingContact)
        }
    }, [contacts, id])

    if(!contact) return <p>Loading contact...</p>

    const handleClick = (event) => {
        fetch(`https://boolean-api-server.fly.dev/nora-hansen/contact/${contact.id}`,
        {
            method: "DELETE",
        })
        navigate("/contactlist")
    }

    return(
        <div className="contact-details">
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street} {contact.city}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default ContactDetails