import { Link } from "react-router-dom"
import ContactInfo from "./ContactInfo";

function ContactList(props) {
    
    const { contacts } = props

    return (
        <ul>
            {contacts.map((contact, index) => {
            return (
                <li key={index} className="contact-item">
                <p className="contact-name">{contact.name}</p>
                <Link to={`/contacts/${contact.id}`} className="view-link">View</Link>
                </li>
            );
            })}
        </ul>
    )
}
export default ContactList