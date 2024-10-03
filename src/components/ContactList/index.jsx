import React, { useContext } from 'react'
import { ContactContext } from '../../App'
import { useNavigate } from 'react-router-dom'

const ContactList = () => {
    const navigate = useNavigate()
    const {contacts, setContacts} = useContext(ContactContext)
    
    return (
        <div>
        <h1>Contact list:</h1>
        {contacts.map((c) => (
            <div className="contact-item">
                <p>{c.firstName} {c.lastName}</p>
                <button onClick={()=>navigate(`/view/${c.id}`)} className="contact-view-btn">View</button>
            </div>
        ))}

        </div>
    )
}

export default ContactList
