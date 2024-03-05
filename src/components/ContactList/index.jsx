import { useEffect, useState } from "react"
import Contact from "./Contact"

function ContactList(props) {
    const { contacts } = props

    console.log("Contacts! ", contacts)

    return(
        <div className="contact-list">
            <h1>Hello, ContactList!</h1>
            <ul>
            {contacts.map((contact, index) => (
                <Contact contact={contact} key={index} />
            ))}
            </ul>
        </div>
    )
}

export default ContactList