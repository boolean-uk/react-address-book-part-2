import { useContext } from "react";
import {ContactContext} from '../App';
import { Link } from "react-router-dom";
import '../App.css'

function ContactList() {
    const {contacts} = useContext(ContactContext)

    return (
        <div className="contacts">
            <h1>Contact List</h1>
            <ul>
                {contacts &&
                contacts.map(contact => (
                    <li key={contact.id}>
                        <Link to={`/contact/${contact.id}`}>
                            {contact.firstName} {contact.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;