import { useEffect } from 'react'
import Contact from "./Contact"
import './style.css'

function ContactList(props) {
    const { contacts, setContacts, toggle } = props

    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/nora-hansen/contact")
            .then(response => response.json())
            .then(response => {
                setContacts(response.filter(contact =>
                    Number(contact.id) > 15).map(contact => ({...contact, id: contact.id})))
            })
    }, [toggle])

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