import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ContactDetails({ contacts }) {
    const [contact, setContact] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        if (contacts && id) {
            setContact(contacts.find((contact) => contact.id === id))
        }
    }, [contacts, id])

    if (!contact) return <p>Not a contact</p>

    return (
        <div className="contact-details">
            <h2>{contact.firstName} {contact.lastName}</h2>
            <h4>{contact.street}</h4>
        </div>
    )
}

export default ContactDetails