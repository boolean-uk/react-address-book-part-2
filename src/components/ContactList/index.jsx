import { useEffect, useState } from "react"
import Contact from "./Contact"
import './style.css'

function ContactList(props) {
    const { contacts, setContacts } = props

    return(
        <div className="contact-list">
            <h1>Hello, ContactList!</h1>
            <ul className="contact-list-list">
            {contacts.map((contact, index) => (
                <Contact contact={contact} key={index} contacts={contacts} setContacts={setContacts}/>
            ))}
            </ul>
        </div>
    )
}

export default ContactList