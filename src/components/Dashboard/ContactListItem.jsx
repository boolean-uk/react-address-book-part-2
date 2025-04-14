import { Link } from "react-router-dom";

function ContactItem({contact}) {
    return (
        <>
            <li>
                <div className='contactListItems'>
                    <div><Link to={`/contacts/${contact.id}`}>{contact.firstName} {contact.lastName}</Link></div>
                    <div><Link to={`/contacts/update/${contact.id}`}>Update contact</Link></div>
                </div>
            </li>
        </>
    );
}

export default ContactItem;