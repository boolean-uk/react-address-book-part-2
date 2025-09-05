import { useContext, useState } from 'react'
import { ContactContext } from '../App';
import ContactListItem from './ContactListItem';

function ContactList() {
    const { contactList } = useContext(ContactContext);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="contact-list">
            <h2><strong>Contact List</strong></h2>
            <input className="search-input-bar" type="text" placeholder="Search contact by first or last name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            <ul>
                {contactList.filter(contact => {
                    const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
                    return fullName.includes(searchTerm.toLowerCase());
                }).map(contact => (
                    <ContactListItem key={contact.id} contact={contact} />
                ))}
            </ul>
        </div>
    );
}

export default ContactList;