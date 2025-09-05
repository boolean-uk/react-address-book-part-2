import { Link } from "react-router-dom";

function ContactListItem({ contact }) {

    return (
        <li>
            <span>{contact.firstName} {contact.lastName}</span>         
            <Link to={`/contact/${contact.id}`}>
                <button>View</button>
            </Link>
        </li>
    );
}

export default ContactListItem;
