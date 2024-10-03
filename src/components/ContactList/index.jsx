import '../../css/ContactList.css'
import { Link } from "react-router-dom";

import { useContext } from 'react';
import { ContactsContext } from '../../App';

function ContactList() {
    const contactsContext = useContext(ContactsContext)
    const { contacts, deleteContact } = contactsContext
    return (
        <>
            <ul>
                <h3>All contacts</h3>
                {contacts.map((c) => (
                    <li key={c.id}>
                        <img src={c.profileImage} alt="" /><br></br>
                        {c.firstName} {c.lastName} <br></br>
                        <Link to={"/view/" + c.id}>View details</Link> <br />
                        <Link to={"/edit/" + c.id}>Edit contact</Link> <br />
                        <a href='#' onClick={() => deleteContact(c.id)}>Delete contact</a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ContactList;