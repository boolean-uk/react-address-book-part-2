import { Link } from "react-router-dom";
import '../styles/ContactListItem.css'
export default function ContactListItem({ contact }) {
    return (
        <div className="contactContainer">
            <Link to={`/contact/${contact.id}`} className="contactInfoLink">{contact.firstName} {contact.lastName}</Link>
        </div>
    )
}