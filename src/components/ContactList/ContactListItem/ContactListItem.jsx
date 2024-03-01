import "./ContactListItem.css"
import { Link } from 'react-router-dom'

const ContactListItem = ({contact}) => {

    return (
        <div className="contact-list-item">
            <span>{contact.firstName} {contact.lastName}</span>
            <Link to={`/contacts/${contact.id}`}><span>View</span></Link>
        </div>
    )
}

export default ContactListItem