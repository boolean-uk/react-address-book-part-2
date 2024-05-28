import {useEffect, useState } from "react"
import ContactList from './ContactList'

export default function Log() {
    const [contacts, setContacts] =useState([])
    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/Shaun-Harris/contact")
        .then((response) => response.json())
        .then((json) => setContacts(json))
        .catch(new Error("Failed to load Contacts"))
    }, [])

    console.log(contacts)

    return (
        <main className="contact-page">
            <h1>Contacts</h1>
            <ContactList contacts={contacts} />
        </main>
    )
}