import { Link } from "react-router-dom";

export default function ContactListItem( {contact} ) {

    return (
        <li>
            <h4>{contact.firstName} {contact.lastName}
                <Link className="viewLink" to={`/view/${contact.id}`}>View</Link>
            </h4>
            <p>---------------------------------------</p>
        </li>
    );
}