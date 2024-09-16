import "./ContactList.css"
import ContactCard from "./ContactCard/ContactCard.jsx"
import ConfirmDeleteAction from "../ConfirmDeleteAction/ConfirmDeleteAction.jsx"
import { useState } from 'react'

const ContactList = ({contacts, refreshContacts}) => { 
    const [modalContent, setModalContent] = useState(undefined)
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <div className="content-container scroll-container">
            <div className="title">Contact list</div>
            <div className="search-container">
                <label>
                Filter by name:  
                <input 
                    label="searchQuery"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                </label>
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
                        <ContactCard contact={contact} toggleDeleteModal={setModalContent}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList