import { useEffect } from "react"
import ContactsListItem from "./ContactsListItem"

export default function ContactsList(props) {
    const { contacts, setContacts } = props

    useEffect(() => {
        fetch('https://boolean-uk-api-server.fly.dev/LeonardoSaraceli/contact')
            .then(res => res.json())
            .then(setContacts)
    }, [setContacts])
    
    return (
        <main className="contacts-list">
            <h2>Contacts</h2>

            <ContactsListItem contacts={contacts} />
        </main>
    )
}