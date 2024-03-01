import "./ContactList.css"
import ContactListItem from "./ContactListItem/ContactListItem.jsx"
import ConfirmDeleteAction from "./ConfirmDeleteAction/ConfirmDeleteAction.jsx"
import { useState } from 'react'

const ContactList = ({contacts, refreshContacts}) => { 
    const [modalContent, setModalContent] = useState(undefined)
    
    return (
        <div className="content-container scroll-container">
            <div className="title">Contact list</div>
            <ConfirmDeleteAction content={modalContent} refreshContacts={refreshContacts} setContent={setModalContent}/>
            <ul className="contacts-list">
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <ContactListItem contact={contact} confirmDelete={setModalContent}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList