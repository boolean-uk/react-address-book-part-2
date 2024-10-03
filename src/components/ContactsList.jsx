import { useState, useEffect } from 'react'
import Contact from './ContactsItem'

export default function ContactsList() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/FelixMathiasson/contact').then((response) => response.json()).then(setContacts)
    }, [])


    return (
        <div className="contact-list">
            <h2 style={{paddingLeft:'25px' }}> Contacts List</h2>
            <ul>
                {contacts.map((contact, id) => (
                    <Contact contact={contact} key={id} setContacts={setContacts} />
                ))}
            </ul>
        </div>
    )
}