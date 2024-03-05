import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './style.css'

function ContactDetails(props) {
    const [contact, setContact] = useState(null)
    const { id } = useParams()
    const { contacts } = props

    useEffect(() => {
        if (contacts && id) {
            const matchingContact = contacts.find((c) =>
            Number(c.id) === Number(id))
            setContact(matchingContact)
        }
    }, [contacts, id])

    if(!contact) return <p>Loading contact...</p>

    return(
        <div className="contact-details">
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street} {contact.city}</p>
        </div>
    )
}

export default ContactDetails