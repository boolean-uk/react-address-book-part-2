import { useEffect } from "react";

import ContactItem from "./ContactItem";

const API_URL = 'https://boolean-api-server.fly.dev/radio58/contact'

export default function ContactList({ contacts, setContacts }) {
    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setContacts(data)
            });
    }, []);

    return (
        <>
        <section className="contacts">
            <h2>
                Contacts
            </h2>
            <ul>
                {contacts.map((contact) => {
                    return <ContactItem contact={contact} key={contact.id}/>
                })}
            </ul>
        </section>
        </>
    )
}