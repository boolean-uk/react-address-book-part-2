import { Link } from "react-router-dom";

export default function ContactsListItem({ contact }) {
    return (
        <li>
            <p>{contact.firstName} {contact.lastName}</p>
            <Link to={`/contact/${contact.id}`}>View</Link>
        </li>
    );
}