
import { useContext } from "react"
import { AppContext } from "../../../../App"
import { Link, Routes, Route } from 'react-router-dom'

import ContactsListItem from "./ContactsListItem"
import { DeleteAllContacts } from "../../../ContactAPI/ContactAPIs"

export default function ContactsList() {
    const { contacts } = useContext(AppContext)

    return(
        <ul>
            <Link to ="/">Back to dashboard</Link>
            {contacts.map((contact, index) => (
                <ContactsListItem key={index} contact={contact} />
            ))}
            
            
        </ul>
    )
}