import { Link } from "react-router-dom";



function ContactListItem({ contact }) {
    return (
        <div>
            <Link to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
        </div>
    )
}

export default ContactListItem