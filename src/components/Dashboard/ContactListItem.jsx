import { Link } from "react-router-dom";

function ContactListItem({contact}) {

    return (
        <>
            <h2>{contact.firstName} {contact.lastName}</h2>
            <p><Link to={`/contact/${contact.id}`} >See Profile</Link></p>
            
        </>
    );
}

export default ContactListItem;
