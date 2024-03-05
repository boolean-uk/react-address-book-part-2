import { useState, useEffect } from 'react'
import { useParams, useNavigate, Routes, Route } from 'react-router-dom'
import UpdateContact from '../UpdateContact'

import './style.css'

function ContactDetails(props) {
    const [contact, setContact] = useState(null)
    const { id } = useParams()
    const { contacts, toggle, setToggle } = props
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
        if(event.target.name === "delete") {
            fetch(`https://boolean-api-server.fly.dev/nora-hansen/contact/${contact.id}`,
            {
                method: "DELETE",
            })
            setToggle(toggle => !toggle)
            navigate("/contactlist")
        }   else if (event.target.name === "update") {
            navigate(`/contact/${id}/edit`)
        }
    }

    return(
        <div className="contact-details">
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p>{contact.street} {contact.city}</p>
            <button name="delete" onClick={handleClick}>Delete</button>
            <button name="update" onClick={handleClick}>Edit</button>
        </div>
    )
}

export default ContactDetails