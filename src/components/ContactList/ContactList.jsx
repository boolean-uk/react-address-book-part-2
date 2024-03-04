import "./ContactList.css"
import ContactListItem from "./ContactListItem/ContactListItem.jsx"
import ConfirmDeleteAction from "../ConfirmDeleteAction/ConfirmDeleteAction.jsx"
import { useState } from 'react'

const ContactList = ({contacts, refreshContacts}) => { 
    const [modalContent, setModalContent] = useState(undefined)
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="content-container scroll-container">
            <div className="title">Contact list</div>
            <div className="search-container">
                Filter by name:  
                <input 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <ConfirmDeleteAction content={modalContent} refreshContacts={refreshContacts} setContent={setModalContent}/>
            <ul className="contacts-list">
                {contacts.filter((c) => {
                    const searchTerms = searchQuery.toLowerCase().split(" ")
                    return searchTerms.every((t) => (
                        c.firstName.toLowerCase().includes(t) || c.lastName.toLowerCase().includes(t)
                    ))})
                    .map((contact, index) => (
                    <li key={index}>
                        <ContactListItem contact={contact} confirmDelete={setModalContent}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList