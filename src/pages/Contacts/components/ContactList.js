import { Link } from "react-router-dom"

function ContactList(props) {
    
    const { contacts, onDelete } = props

    return (
        <ul>
            {contacts.map((contact, index) => {
            return (
                <li key={index} className="contact-item">
                <p className="contact-name">{contact.name}</p>
                <Link to={`/contacts/${contact.id}`} className="view-link">View</Link>
                <input type="submit" value="Delete" onClick={() => onDelete(contact.id)}/>
                </li>
            );
            })}
        </ul>
    )
}
export default ContactList