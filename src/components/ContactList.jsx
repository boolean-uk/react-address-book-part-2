import { useContext } from "react"
import ContactListItem from "./ContactListItem"
import { ContactContext } from "../App"


const ContactList = () => {
    const context = useContext(ContactContext)
    const contacts = context.contacts
    
    return (
        <ul>
        {contacts.map((contact, index) => (
            <ContactListItem contact={contact} key={index}/>
        ))}
        </ul>
    )


}

export default ContactList