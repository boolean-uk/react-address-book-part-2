import "./ContactList.css"
import ContactListItem from "./ContactListItem/ContactListItem.jsx"

const ContactList = ({contacts}) => { 
    return (
        <div className="content-container scroll-container">
            <div className="title">Contact list</div>
            <ul className="contacts-list">
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <ContactListItem contact={contact}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList