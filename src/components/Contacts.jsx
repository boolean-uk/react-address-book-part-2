import { Link } from 'react-router-dom';

export default function Contacts({ contacts, filterFunction }) {
    const filteredContacts = filterFunction ? contacts.filter(filterFunction) : contacts;

    return (
        <div>
            <h1>Contacts List</h1>
            <ul>
                {filteredContacts.map((contact, index) => (
                    <li key={index}>
                        <Link to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}