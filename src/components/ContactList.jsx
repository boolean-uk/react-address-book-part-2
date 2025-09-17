import { Link } from "react-router-dom";

function ContactList({contacts}) {
    return(
        <>
            <h2>Contact List</h2>
            <ul>
                {contacts.map(contact => (
                    <li key = {contact.id}>
                        <Link to={`/view/${contact.id}`}>
                            {contact.firstName} {contact.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ContactList;