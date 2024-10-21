import { Link } from "react-router-dom";

function ContactListItem({contact}){
    return(
        <li>
            <p>{contact.firstName} {contact.lastName}</p>
            <Link to = {`/contacts/${contact.id}`}> View</Link>
        </li>
    )
}

export default ContactListItem